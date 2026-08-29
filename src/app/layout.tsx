import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { content } from "@/data/content";
import "./globals.css";

/* Geist Mono is variable (100–900) — real medium/semibold labels instead of
   Fragment Mono's faux-bold (Fragment Mono only ships weight 400).
   The sans face is the platform system stack (SF Pro / Segoe UI / Roboto),
   applied via --font-geist-sans in minimal.css — zero webfont download. */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  authors: [{ name: content.meta.author }],
  openGraph: {
    title: content.meta.openGraph.title,
    description: content.meta.openGraph.description,
    type: content.meta.openGraph.type as "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
