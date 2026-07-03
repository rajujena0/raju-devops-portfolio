import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AuroraBackground from "@/components/ui/AuroraBackground";
import BackgroundGrid from "@/components/ui/BackgroundGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Raju Jena | DevOps Engineer",
    template: "%s | Raju Jena",
  },

  description:
    "DevOps Engineer specializing in AWS, Azure, Kubernetes, Docker, Terraform, CI/CD, GitHub Actions, Jenkins, and Cloud Infrastructure.",

  keywords: [
    "DevOps Engineer",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Cloud Engineer",
    "Platform Engineer",
    "Next.js",
    "TypeScript",
  ],

  authors: [
    {
      name: "Raju Jena",
    },
  ],

  creator: "Raju Jena",

  openGraph: {
    title: "Raju Jena | DevOps Engineer",
    description:
      "Cloud • DevOps • Kubernetes • AWS • Azure • Terraform • Docker",

    url: siteUrl,

    siteName: "Raju Jena Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Raju Jena Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raju Jena | DevOps Engineer",
    description:
      "Cloud • DevOps • AWS • Azure • Kubernetes • Terraform",

    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuroraBackground />
        <BackgroundGrid />
        {children}
      </body>
    </html>
  );
}