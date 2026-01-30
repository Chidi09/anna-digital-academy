import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import nodemailer from 'nodemailer';
import { registrationSchema, validateFile } from '@/lib/schemas';
import rateLimit from '@/lib/rate-limit';
import { EmailTemplates } from '@/lib/emails';
import { createPaymentConfirmToken } from '@/lib/payment-token';

// Initialize Rate Limiter (3 requests per minute per IP)
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export async function POST(request: Request) {
  try {
    // SECURITY LAYER 1: RATE LIMITING
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "127.0.0.1";
    try {
      await limiter.check(new Response(), 3, ip);
    } catch {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const rawData = Object.fromEntries(formData.entries());

    // SECURITY LAYER 2: INPUT VALIDATION (ZOD)
    const validation = registrationSchema.safeParse({
      fullName: rawData.fullName,
      email: rawData.email,
      whatsapp: rawData.whatsapp,
      gender: rawData.gender,
      reason: rawData.reason,
      referralCode: rawData.referralCode || "",
      paymentMethod: rawData.paymentMethod,
      paymentReference: rawData.paymentReference,
    });

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const data = validation.data;
    const paymentProof = formData.get('paymentProof') as File | null;

    // SECURITY LAYER 3: FILE SANITIZATION
    if (data.paymentMethod === 'transfer') {
      if (!paymentProof) {
        return NextResponse.json(
          { error: 'Payment proof is required for transfers.' },
          { status: 400 }
        );
      }

      const fileCheck = validateFile(paymentProof);
      if (!fileCheck.valid) {
        return NextResponse.json({ error: fileCheck.error }, { status: 400 });
      }
    }

    // Determine payment status
    const paymentStatus = data.paymentMethod === 'online' ? 'verified' : 'pending';
    let proofUrl = '';
    let confirmUrl = '';

    // Upload payment proof to Vercel Blob if transfer
    if (data.paymentMethod === 'transfer' && paymentProof) {
      const { put } = await import('@vercel/blob');
      const sanitizedFilename = paymentProof.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const blob = await put(`payment-proofs/${Date.now()}-${sanitizedFilename}`, paymentProof, {
        access: 'public',
      });
      proofUrl = blob.url;

      // Generate confirmation URL for admin to click once payment is verified
      const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ||
        process.env.VERCEL_URL?.startsWith('http')
          ? process.env.VERCEL_URL
          : `https://${process.env.VERCEL_URL}`;

      if (baseUrl) {
        const token = createPaymentConfirmToken({
          email: data.email,
          fullName: data.fullName,
          paymentMethod: 'transfer',
        });
        confirmUrl = `${baseUrl}/api/confirm-payment?token=${encodeURIComponent(token)}`;
      }
    }

    // Configure Email Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send Email to ADMIN
    await transporter.sendMail({
      from: `"ADA System" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Registration: ${data.fullName}`,
      html: EmailTemplates.adminNotification({
        fullName: data.fullName,
        email: data.email,
        whatsapp: data.whatsapp,
        gender: data.gender,
        reason: data.reason,
        referralCode: data.referralCode,
        paymentMethod: data.paymentMethod,
        paymentStatus,
        proofUrl,
        confirmUrl,
      }),
    });

    // 2. Send Confirmation Email to STUDENT
    if (paymentStatus === 'verified') {
      // Online Payment Success
      await transporter.sendMail({
        from: `"Anna Digital Academy" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "Welcome to ADA! Payment Confirmed",
        html: EmailTemplates.studentWelcomeOnline(data.fullName),
      });
    } else {
      // Bank Transfer Pending
      await transporter.sendMail({
        from: `"Anna Digital Academy" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "Registration Received - Payment Under Review",
        html: EmailTemplates.studentPending(data.fullName),
      });
    }

    return NextResponse.json({ success: true, message: 'Registration received securely' });

  } catch (error) {
    console.error('Security Error:', error);
    return NextResponse.json(
      { error: 'Server validation failed. Please check your input and try again.' },
      { status: 500 }
    );
  }
}
