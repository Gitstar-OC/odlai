import "./global.css";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import type { Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { baseUrl, bannerUrl } from "@/utils/metadata";
import type { Metadata } from "next/types";
import { RootProvider } from "fumadocs-ui/provider";
// import { Banner } from "fumadocs-ui/components/banner";
// import Link from "next/link";

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
    images: "/banner.png",
    title: {
      default: "OpenDeepLearning",
      template: "%s | OpenDeepLearning",
    },
    description:
      "Courses, code, news, research, and community for building AI-powered products.",
  },
  metadataBase: baseUrl,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        {/* <Banner variant="rainbow" id="hello-world">
          <Link href={bannerUrl} target="_blank" rel="noopener noreferrer">
            ⭐ Star OpenDeepLearning on GitHub!
          </Link>
        </Banner> */}
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
