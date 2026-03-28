import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShadowHire — Skill Verification & Fake Experience Detection",
  description:
    "AI-powered platform that verifies candidate skills and detects fabricated experience through multi-agent interviews, bluff detection, and authenticity scoring.",
  keywords: ["hiring", "AI interview", "skill verification", "fake experience detection", "recruitment"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
