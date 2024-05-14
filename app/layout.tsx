import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

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
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body
          className={`${inter.className} antialiased flex flex-col h-screen bg-gradient-to-r from-slate-50 to-slate-100 dark:from-black dark:to-slate-900 transition-colors`}
        >
          <Navbar />
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
