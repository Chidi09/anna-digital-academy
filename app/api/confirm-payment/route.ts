import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { verifyPaymentConfirmToken } from '@/lib/payment-token';
import { EmailTemplates } from '@/lib/emails';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token') || '';

    const payload = verifyPaymentConfirmToken(token);

    if (!payload || payload.paymentMethod !== 'transfer') {
      return new NextResponse(
        `<html><body style="font-family: system-ui; padding: 40px; text-align: center;">
          <h1>Link Invalid or Expired</h1>
          <p>This confirmation link is no longer valid. If you believe this is a mistake, please contact support.</p>
        </body></html>`,
        {
          status: 400,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send final confirmation email to student
    await transporter.sendMail({
      from: `"Anna Digital Academy" <${process.env.EMAIL_USER}>`,
      to: payload.email,
      subject: 'Payment Confirmed – Your ADA Classes Are Ready',
      html: EmailTemplates.studentTransferConfirmed(payload.fullName),
    });

    return new NextResponse(
      `<html><body style="font-family: system-ui; padding: 40px; text-align: center;">
        <h1>Payment Confirmed</h1>
        <p>The student has been notified that their payment is confirmed and their classes are beginning.</p>
      </body></html>`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      },
    );
  } catch (error) {
    console.error('Confirm payment error:', error);
    return new NextResponse(
      `<html><body style="font-family: system-ui; padding: 40px; text-align: center;">
        <h1>Something Went Wrong</h1>
        <p>We could not process this confirmation. Please try again or contact support.</p>
      </body></html>`,
      {
        status: 500,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      },
    );
  }
}

