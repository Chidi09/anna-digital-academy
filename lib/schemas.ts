import { z } from "zod";

// Max file size: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name is too short")
    .max(100)
    .regex(/^[a-zA-Z\s\-\.]+$/, "Name contains invalid characters"),
  email: z.string().email("Invalid email address"),
  whatsapp: z
    .string()
    .min(10, "Number too short")
    .max(15)
    .regex(/^\+?[0-9]+$/, "Invalid phone number format"),
  gender: z.enum(["Male", "Female"]),
  reason: z
    .string()
    .min(10, "Please provide a more detailed reason")
    .max(500, "Reason is too long"),
  referralCode: z.string().max(20).optional().or(z.literal("")),
  paymentMethod: z.enum(["online", "transfer"]),
  paymentReference: z.string().optional(),
});

// Separate validation for file to keep logic clean
export function validateFile(file: File) {
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: "File size must be less than 5MB." };
  }
  if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: "Only .jpg, .png, and .pdf files are allowed." };
  }
  return { valid: true };
}
