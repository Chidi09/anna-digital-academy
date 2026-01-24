# Email Configuration Guide

This guide will help you set up email notifications for student registrations.

## Quick Setup

### Step 1: Configure Gmail App Password

Since you're using Gmail to send emails, you need to create an "App Password" (your regular Gmail password won't work):

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", enable **2-Step Verification** (if not already enabled)
4. After 2-Step is enabled, go back to Security and find **App passwords**
5. Click on **App passwords**
6. Select:
   - App: **Mail**
   - Device: **Other (Custom name)** - enter "Anna Digital Academy"
7. Click **Generate**
8. Google will show you a 16-character password - **copy this immediately**

### Step 2: Update `.env.local`

Open the `.env.local` file in your project root and update it with your real credentials:

```env
# Replace with your actual Gmail address
EMAIL_USER=youremail@gmail.com

# Paste the 16-character App Password you just generated
EMAIL_PASS=abcd efgh ijkl mnop

# Replace with Anna's email where notifications should be sent
ADMIN_EMAIL=anna@annadigitalacademy.com
```

**Important Notes:**
- The App Password will look like: `abcd efgh ijkl mnop` (with spaces) - you can remove the spaces or leave them
- NEVER commit the `.env.local` file to Git (it's already in `.gitignore`)
- Keep this App Password secure - it gives access to send emails from your account

### Step 3: Test the Email System

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Fill out the registration form and submit

4. Check the email inbox you configured as `ADMIN_EMAIL` - you should receive a notification with:
   - Student details (name, email, phone, gender)
   - Admission Officer Code (if provided)
   - Payment method used
   - Payment proof attachment (if bank transfer)

## How It Works

### Registration Flow

1. **Student fills form** → Enters their details and selects payment method
2. **Frontend submits** → Form data sent to `/api/register` endpoint
3. **Backend processes** → API route validates data and sends email via Nodemailer
4. **Email sent** → You receive notification with all details
5. **Student redirected** → Success page shows appropriate message based on payment method

### Email Content

The email you receive includes:

```
Subject: New Registration: [Student Name] (ONLINE/TRANSFER)

Body:
- Payment method indicator (✅ Online or ⚠️ Bank Transfer)
- Full student details (name, email, WhatsApp, gender)
- Highlighted Admission Officer Code section
- Payment proof attachment (for bank transfers)
```

## Troubleshooting

### "Invalid login" or "Authentication failed"
- Make sure you're using an **App Password**, not your regular Gmail password
- Verify 2-Step Verification is enabled on your Google Account
- Check that the email in `EMAIL_USER` matches the account where you generated the App Password

### Email not arriving
- Check your spam/junk folder
- Verify `ADMIN_EMAIL` is set correctly
- Check the server console for error messages
- Make sure `.env.local` is in the project root (same folder as `package.json`)

### "MODULE_NOT_FOUND" error
- Run `npm install nodemailer` again
- Restart your development server after installing

### Changes to `.env.local` not taking effect
- Restart your development server (`Ctrl+C` then `npm run dev`)
- Environment variables are only loaded when the server starts

## Alternative Email Services

If you prefer not to use Gmail, you can use other SMTP services:

### Using Custom SMTP
Replace the `transporter` configuration in `app/api/register/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.yourprovider.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Using SendGrid
1. Install SendGrid: `npm install @sendgrid/mail`
2. Get API key from SendGrid dashboard
3. Update the API route to use SendGrid instead of Nodemailer

## Security Best Practices

- ✅ Never commit `.env.local` to version control
- ✅ Use App Passwords instead of regular passwords
- ✅ Rotate App Passwords periodically
- ✅ Use environment variables for all sensitive data
- ✅ Keep your email credentials secure
- ✅ Monitor your email sending limits (Gmail: ~500/day)

## Production Deployment

When deploying to Vercel, Netlify, or other platforms:

1. Go to your project's environment variables settings
2. Add the same three variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `ADMIN_EMAIL`
3. Redeploy your application

**Note:** Gmail has sending limits. For production with high volume, consider using:
- SendGrid (99 emails/day free tier)
- Mailgun
- Amazon SES
- Postmark

## Support

If you encounter issues, check:
1. Server console for error messages
2. Gmail account security settings
3. `.env.local` file is properly formatted (no extra spaces, quotes, etc.)
