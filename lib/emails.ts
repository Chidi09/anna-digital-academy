const BASE_STYLE = `
  font-family: 'Helvetica', 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
`;

const HEADER = `
  <div style="background-color: #043744; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h1 style="color: #E1A21A; margin: 0; font-family: 'Georgia', serif; letter-spacing: 2px;">ADA</h1>
    <p style="color: #ffffff; margin: 5px 0 0; font-size: 12px; text-transform: uppercase;">Anna Digital Academy</p>
  </div>
`;

const FOOTER = `
  <div style="text-align: center; font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px;">
    <p>Creating Opportunities, Not Waiting for Them.</p>
    <p>&copy; ${new Date().getFullYear()} Anna Digital Academy.</p>
  </div>
`;

export const EmailTemplates = {
  // 1. ADMIN NOTIFICATION (When a student registers)
  adminNotification: (data: any) => `
    <div style="${BASE_STYLE}">
      ${HEADER}
      <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h2 style="color: #043744; margin-top: 0;">New Student Registration</h2>
        <div style="background-color: ${data.paymentStatus === "verified" ? "#e6fffa" : "#fffaf0"}; border-left: 4px solid ${data.paymentStatus === "verified" ? "#38b2ac" : "#ed8936"}; padding: 15px; margin-bottom: 20px;">
          <p style="margin: 0; font-weight: bold;">Status: ${data.paymentStatus.toUpperCase()}</p>
          <p style="margin: 5px 0 0; font-size: 14px;">Method: ${data.paymentMethod}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666;">Name:</td><td style="font-weight: bold;">${data.fullName}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email:</td><td>${data.email}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">WhatsApp:</td><td>${data.whatsapp}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Referral:</td><td style="color: #E1A21A; font-weight: bold;">${data.referralCode || "None"}</td></tr>
        </table>

        ${
          data.proofUrl
            ? `
          <div style="margin-top: 20px; text-align: center;">
            <a href="${data.proofUrl}" style="background-color: #043744; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">View Payment Proof</a>
          </div>
        `
            : ""
        }
      </div>
      ${FOOTER}
    </div>
  `,

  // 2. STUDENT WELCOME (Online Payment - Instant Success)
  studentWelcomeOnline: (name: string) => `
  <div style="${BASE_STYLE}">
    ${HEADER}
    <div style="background-color: #ffffff; padding: 30px;">
      <h2 style="color: #043744;">Payment Received</h2>
      <p>Hello ${name},</p>
      <p>Your payment has been received successfully.</p>

      <div style="background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 15px; margin: 20px 0;">
        <p style="margin: 0; color: #166534; font-weight: bold;">What Happens Next?</p>
        <p style="margin: 5px 0 0; font-size: 14px;">
           You will receive your <strong>welcome message, handbook, and access details</strong> within 24 hours via email or WhatsApp.
        </p>
      </div>

      <p>Please keep an eye on your inbox (and spam folder).</p>
    </div>
    ${FOOTER}
  </div>
`,

  // 3. STUDENT PENDING (Bank Transfer - Received)
  studentPending: (name: string) => `
    <div style="${BASE_STYLE}">
      ${HEADER}
      <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
        <h2 style="color: #043744; margin-top: 0;">Payment Received</h2>
        <p>Hello ${name},</p>
        <p style="line-height: 1.6;">We have received your registration and proof of payment. Our team is currently reviewing it.</p>

        <div style="background-color: #fffaf0; border-left: 4px solid #E1A21A; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; color: #9c4221;"><strong>Status: Pending Verification</strong></p>
          <p style="margin: 5px 0 0; font-size: 13px;">This process typically takes 24-48 hours.</p>
        </div>

        <p>Once verified, you will receive your access details immediately via email.</p>
      </div>
      ${FOOTER}
    </div>
  `,
};
