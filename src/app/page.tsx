import type { Metadata } from "next";
import { Site } from "@/components/site";

export const metadata = {
  title: "Samarth Nagar — Backend Software Engineer",
  description:
    "Backend engineer building TypeScript & Node.js applications, APIs, relational-database-heavy systems, and real-time features with WebSockets and WebRTC. Based in Indore, India.",
  openGraph: {
    title: "Samarth Nagar — Backend Software Engineer",
    description:
      "Backend engineer building TypeScript & Node.js applications, APIs, and real-time systems.",
    type: "website",
  },
} satisfies Metadata;

export default function Home() {
  return <Site />;
}
