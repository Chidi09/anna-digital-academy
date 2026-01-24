import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trust Vercel Blob for images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },

  // Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME sniffing
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents Clickjacking (site can't be put in an iframe)
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block", // Prevents Cross-Site Scripting
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
