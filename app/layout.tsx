import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body
          className={`${inter.className} antialiased bg-gradient-to-r from-slate-50 to-slate-100 dark:from-black dark:to-slate-900 transition-colors`}
        >
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
