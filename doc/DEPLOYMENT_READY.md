# ✅ Pre-Deployment Checklist - Anna Digital Academy

## All Updates Complete!

All the requested changes have been successfully implemented. Here's what was updated:

---

## 1. ✅ Contact Information Updated

### Homepage Contact Section (`app/page.tsx`)
- **Email**: Annadigitalacademy@gmail.com
- **WhatsApp**: +234 704 417 3871
- **Third Card**: Changed from "Support Hours" to "Office: Registered Business | Nigeria"

### Footer (`components/Footer.tsx`)
- Updated email to: Annadigitalacademy@gmail.com
- Updated WhatsApp to: +234 704 417 3871
- Updated copyright: "© 2026 Anna Digital Academy. Registered Business | Nigeria."

---

## 2. ✅ Registration Form Enhanced (`components/RegistrationForm.tsx`)

### New Features Added:
1. **Cohort Date Display Banner**:
   ```
   Next Cohort Starts
   May 2026 (Limited Seats)
   ```

2. **"Reason for Joining" Field**:
   - Label: "Reason for Joining (Short Response)"
   - Placeholder: "Why do you want to join ADA?"
   - Validation: 10-500 characters
   - Type: Textarea (3 rows, non-resizable)

3. **Admission Officer Code Field**:
   - Updated placeholder: "If you were referred by an admission officer, enter their name or code here."

---

## 3. ✅ Backend Updates

### Schema Validation (`lib/schemas.ts`)
- Added `reason` field with validation (min 10, max 500 characters)

### API Route (`app/api/register/route.ts`)
- Extracts `reason` from form data
- Validates `reason` field
- Passes `reason` and `gender` to admin notification email

### Email Template (`lib/emails.ts`)
- Added **Gender** to admin notification
- Added **Reason for Joining** to admin notification (styled in italics)

---

## 4. 📧 Email Configuration Required

Before deploying to Vercel, you need to generate a **Gmail App Password**:

### Step-by-Step Guide:

1. **Go to Google Account Settings**:
   - Visit: https://myaccount.google.com/security

2. **Enable 2-Step Verification** (if not already enabled):
   - Click "2-Step Verification"
   - Follow the setup process

3. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter: "Anna Digital Academy Website"
   - Click "Generate"
   - **Copy the 16-character password** (you'll only see it once)

---

## 5. 🚀 Vercel Deployment Steps

### A. Push Code to GitHub
```bash
git add .
git commit -m "Pre-deployment: Updated contact info, added reason field, cohort date"
git push origin main
```

### B. Deploy to Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import your `anna-digital-academy` repository
4. Click "Deploy"

### C. Add Environment Variables in Vercel

Go to: **Project Settings → Environment Variables**

Add these variables:

```env
# Email Configuration
EMAIL_USER=Annadigitalacademy@gmail.com
EMAIL_PASS=<your-16-char-app-password-from-step-4>
ADMIN_EMAIL=Annadigitalacademy@gmail.com

# Paystack Configuration (from Paystack Dashboard)
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_xxxxx
PAYSTACK_SECRET_KEY=sk_live_xxxxx

# Database (from Neon Dashboard)
POSTGRES_URL=postgresql://xxxxx

# File Storage (from Vercel Storage)
BLOB_READ_WRITE_TOKEN=vercel_blob_xxxxx
```

### D. Redeploy After Adding Environment Variables
Vercel will automatically redeploy once you save the environment variables.

---

## 6. 🎯 Testing Checklist (After Deployment)

### Homepage Tests:
- [ ] Email displays as: Annadigitalacademy@gmail.com
- [ ] WhatsApp shows: +234 704 417 3871
- [ ] Third contact card says "Office: Registered Business | Nigeria"

### Registration Form Tests:
- [ ] Cohort date banner shows "May 2026 (Limited Seats)"
- [ ] "Reason for Joining" textarea appears
- [ ] Form validation works (try submitting with <10 characters in reason field)
- [ ] Online payment redirects properly
- [ ] Bank transfer upload works

### Email Tests:
- [ ] Admin receives email with gender and reason fields
- [ ] Student receives confirmation email (online payment)
- [ ] Student receives pending email (bank transfer)

### Footer Tests:
- [ ] Copyright shows: "© 2026 Anna Digital Academy. Registered Business | Nigeria."
- [ ] Email and WhatsApp links work

---

## 7. 📋 Paystack & Neon Setup (If Not Done)

### Paystack:
1. Go to: https://dashboard.paystack.com
2. Navigate to Settings → API Keys & Webhooks
3. Copy **Public Key** and **Secret Key**

### Neon (PostgreSQL):
1. Go to: https://console.neon.tech
2. Create a new project called "anna-digital-academy"
3. Copy the **Connection String** (starts with `postgresql://`)

### Vercel Blob Storage:
1. In Vercel Dashboard → Storage → Create Blob Store
2. Name it "ada-payment-proofs"
3. Copy the **Read/Write Token**

---

## 8. ✅ Changes Summary

| File | Changes Made |
|------|--------------|
| `app/page.tsx` | Updated contact info in Contact section |
| `components/RegistrationForm.tsx` | Added cohort date banner, reason field, updated state |
| `components/Footer.tsx` | Updated email, WhatsApp, copyright text |
| `lib/schemas.ts` | Added reason field validation |
| `lib/emails.ts` | Added gender and reason to admin email template |
| `app/api/register/route.ts` | Added reason extraction and email params |

---

## 9. 🎉 You're Ready to Deploy!

Everything is coded and ready. Once you:
1. Generate the Gmail App Password
2. Get Paystack keys
3. Set up Neon database
4. Push to GitHub
5. Add environment variables in Vercel

The website will be **live and fully functional**!

---

_Last Updated: 2026-01-24_
