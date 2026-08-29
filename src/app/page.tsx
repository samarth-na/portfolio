import type { Metadata } from "next";
import { MinimalSite } from "@/components/minimal/minimal-site";
import "./minimal.css";

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
  return (
    <div className="minimal">
      <MinimalSite />
    </div>
  );
}
