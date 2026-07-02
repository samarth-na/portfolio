import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Playfair_Display, Space_Grotesk } from "next/font/google";
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

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Samarth Nagar — Backend · Systems · DevOps",
  description:
    "Backend-focused developer obsessed with systems, infrastructure, performance, and browser-native tech. Based in Indore, India.",
  authors: [{ name: "Samarth Nagar" }],
  openGraph: {
    title: "Samarth Nagar — Backend · Systems · DevOps",
    description:
      "Backend-focused developer obsessed with systems, infrastructure, performance, and browser-native tech.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${anton.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
