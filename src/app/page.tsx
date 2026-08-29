import type { Metadata } from "next";
import { MinimalAbout } from "@/components/minimal/minimal-about";
import { MinimalExperience } from "@/components/minimal/minimal-experience";
import { MinimalFooter } from "@/components/minimal/minimal-footer";
import { MinimalHero } from "@/components/minimal/minimal-hero";
import { MinimalProjects } from "@/components/minimal/minimal-projects";
import { MinimalResearch } from "@/components/minimal/minimal-research";
import { MinimalStack } from "@/components/minimal/minimal-stack";
import "./minimal.css";

export const metadata: Metadata = {
  title: "Samarth Nagar — Backend Software Engineer",
  description:
    "Backend engineer building TypeScript & Node.js applications, APIs, relational-database-heavy systems, and real-time features with WebSockets and WebRTC. Based in Indore, India.",
  openGraph: {
    title: "Samarth Nagar — Backend Software Engineer",
    description:
      "Backend engineer building TypeScript & Node.js applications, APIs, and real-time systems.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="minimal">
      <main id="main" className="m-page" tabIndex={-1}>
        <MinimalHero />
        <MinimalAbout />
        <MinimalExperience />
        <MinimalProjects />
        <MinimalStack />
        <MinimalResearch />
        <MinimalFooter />
      </main>
    </div>
  );
}
