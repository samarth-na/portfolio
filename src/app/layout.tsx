import type { Metadata } from "next";
import Script from "next/script";
import { ThemeToggle } from "@/components/theme-toggle";
import { content } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  authors: [{ name: content.meta.author }],
  openGraph: {
    title: content.meta.openGraph.title,
    description: content.meta.openGraph.description,
    type: content.meta.openGraph.type as "website",
    // Empty 1x1 image with no fetchable URL. Preview crawlers reject it,
    // leaving a text-only card instead of scraping a page image.
    images: [
      {
        url: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        width: 1,
        height: 1,
        alt: "",
      },
    ],
  },
  twitter: { card: "summary" },
};

const THEME_INIT = `(function(){try{var t=localStorage.getItem("papers-theme");if(!t)t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col mt-16">
        {/* Sets data-theme before first paint to avoid a theme flash. */}
        <Script id="papers-theme-init" strategy="beforeInteractive">
          {THEME_INIT}
        </Script>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
