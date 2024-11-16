import "./global.css";
import { GeistSans } from "geist/font/sans";
import type { Viewport } from 'next';
import { GeistMono } from "geist/font/mono";
import { baseUrl, createMetadata } from '@/utils/metadata';
import { RootProvider } from "fumadocs-ui/provider";

export const metadata = createMetadata({
  title: {
    template: '%s | OpenDeepLearning',
    default: 'OpenDeepLearning',
  },
  description: 'Resources for learning Deep Learning.',
  metadataBase: baseUrl,
  icons: {
    icon: "/favicon.ico",
  },
});

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
