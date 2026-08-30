import type { Metadata } from "next";
import Script from "next/script";
import { ThemeToggle } from "@/components/theme-toggle";
import { content } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://samarth.page"),
  title: content.meta.title,
  description: content.meta.description,
  authors: [{ name: content.meta.author }],
  openGraph: {
    title: content.meta.openGraph.title,
    description: content.meta.openGraph.description,
    type: content.meta.openGraph.type as "website",
    images: [
      {
        url: content.meta.openGraph.image,
        width: 1974,
        height: 1110,
        alt: content.meta.openGraph.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [content.meta.openGraph.image],
  },
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
