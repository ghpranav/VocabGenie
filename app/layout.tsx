import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Vocab Genie",
  description:
    "Unleash your inner wordsmith! Flashcards meet AI for a smarter vocabulary adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gradient-to-r from-black to-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
