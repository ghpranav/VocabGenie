import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Vocab Genie | AI Flashcards",
  description:
    "Unleash your inner wordsmith! Flashcards meet AI for a smarter vocabulary adventure.",
  metadataBase: new URL("https://vocabgenie.vercel.app"),
  keywords: [
    "vocabulary",
    "flashcards",
    "words",
    "dictionary",
    "thesaurus",
    "english",
    "language",
    "learning",
    "education",
    "study",
    "school",
    "college",
    "high school",
    "SAT",
    "GRE",
    "GMAT",
    "TOEFL",
    "IELTS",
    "AI",
    "LLM",
    "Groq",
    "Llama3",
  ],
  openGraph: {
    url: "https://vocabgenie.vercel.app",
    type: "website",
    title: "Vocab Genie | AI Flashcards",
    description:
      "Unleash your inner wordsmith! Flashcards meet AI for a smarter vocabulary adventure.",
    siteName: "Vocab Genie",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Vocab Genie | AI Flashcards",
  verification: {
    google: "eAXThJmzG524nBbXxQBfuq481f0CF8Hm1signqxMeMI",
  },
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
