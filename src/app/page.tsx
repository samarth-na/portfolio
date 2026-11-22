import type { Metadata } from "next";
import { Site } from "@/components/site";

export const metadata = {
  title: "Samarth Nagar - Software Engineer",
  description:
    "Software engineer building TypeScript & Node.js applications, APIs, relational-database-heavy systems, and real-time features with WebSockets and WebRTC. Based in Indore, India.",
  openGraph: {
    title: "Samarth Nagar - Software Engineer",
    description:
      "Software engineer building TypeScript & Node.js applications, APIs, and real-time systems.",
    type: "website",
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
} satisfies Metadata;

export default function Home() {
  return <Site />;
}
