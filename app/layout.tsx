import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import type { Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: "OpenDeepLearning",
    template: "%s | OpenDeepLearning",
  },
  description:
    "Courses, code, news, research, and community for building AI-powered products.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
    title: {
      default: "OpenDeepLearning",
      template: "%s | OpenDeepLearning",
    },
    description:
      "Courses, code, news, research, and community for building AI-powered products.",
  },
  // metadataBase: "https://www.opendeeplearning.xyz/",
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
