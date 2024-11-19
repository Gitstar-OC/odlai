import "katex/dist/katex.css";
import "./global.css";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { baseUrl, createMetadata, bannerUrl } from "@/utils/metadata";
import { RootProvider } from "fumadocs-ui/provider";
import { Banner } from "fumadocs-ui/components/banner";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa6";

export const metadata = createMetadata({
  title: {
    default: "OpenDeepLearning",
    template: "%s | OpenDeepLearning",
  },
  description:
    "Courses, code, news, research, and community for building AI-powered products..",
  metadataBase: baseUrl,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Banner variant="rainbow" id="hello-world">
          <Link
            href={bannerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            ⭐ Loving ODL? Leave a star!{" "}
            <FaGithubAlt className="ml-2 text-lg" />
          </Link>
        </Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
