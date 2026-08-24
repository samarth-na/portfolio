import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Samarth Nagar — Backend Software Engineer",
  description:
    "Backend-focused engineer building TypeScript & Node.js applications, APIs, relational-database-heavy systems, and real-time features with WebSockets and WebRTC. Based in Indore, India.",
  authors: [{ name: "Samarth Nagar" }],
  openGraph: {
    title: "Samarth Nagar — Backend Software Engineer",
    description:
      "Backend-focused engineer building TypeScript & Node.js applications, APIs, and real-time systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
