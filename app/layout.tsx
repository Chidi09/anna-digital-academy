import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// 1. Primary Heading Font (Elegant, Old-School Classy)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: 'swap',
});

// 2. Body Font (Clean, Geometric, Modern)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Anna Digital Academy | Practical Business Education",
  description: "Creating Opportunities, Not Waiting for Them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${montserrat.variable} bg-ada-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
