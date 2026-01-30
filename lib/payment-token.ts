import crypto from "crypto";

const DEFAULT_EXPIRY_HOURS = 72;

function getSecret() {
  return (
    process.env.PAYMENT_CONFIRM_SECRET ||
    process.env.EMAIL_PASS ||
    "change-this-secret-in-production"
  );
}

export interface PaymentConfirmPayload {
  email: string;
  fullName: string;
  paymentMethod: "online" | "transfer";
  createdAt: number;
}

export function createPaymentConfirmToken(
  payload: Omit<PaymentConfirmPayload, "createdAt">,
  expiresInHours: number = DEFAULT_EXPIRY_HOURS,
): string {
  const createdAt = Date.now();
  const data = {
    ...payload,
    createdAt,
    exp: createdAt + expiresInHours * 60 * 60 * 1000,
  };
  const json = JSON.stringify(data);
  const encoded = Buffer.from(json).toString("base64url");
  const hmac = crypto
    .createHmac("sha256", getSecret())
    .update(encoded)
    .digest("base64url");
  return `${encoded}.${hmac}`;
}

export function verifyPaymentConfirmToken(
  token: string,
): PaymentConfirmPayload | null {
  if (!token || !token.includes(".")) return null;
  const [encoded, signature] = token.split(".");

  const expectedSig = crypto
    .createHmac("sha256", getSecret())
    .update(encoded)
    .digest("base64url");

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig))) {
    return null;
  }

  try {
    const decoded = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8"),
    ) as PaymentConfirmPayload & { exp?: number };

    if (decoded.exp && Date.now() > decoded.exp) {
      return null;
    }

    return {
      email: decoded.email,
      fullName: decoded.fullName,
      paymentMethod: decoded.paymentMethod,
      createdAt: decoded.createdAt,
    };
  } catch {
    return null;
  }
}

