import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vrBharat | Building Digital Bharat",
  description:
    "We build digital products that people actually use. Native mobile apps, web development, SaaS, and AI integration for the next generation of India.",
  keywords: ["vrBharat", "app development India", "web development", "SaaS", "AI integration", "startups India", "Jinete", "PDify", "LearnTok"],
  metadataBase: new URL("https://vrbharat.tech"),
  openGraph: {
    title: "vrBharat | Building Digital Bharat",
    description: "We build digital products that people actually use. Native mobile apps, web development, SaaS, and AI integration for the next generation of India.",
    url: "https://vrbharat.tech",
    siteName: "vrBharat",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "vrBharat | Building Digital Bharat",
    description: "We build digital products that people actually use. Native mobile apps, web development, SaaS, and AI integration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
