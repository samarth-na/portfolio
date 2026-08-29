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
  title: "Samarth Nagar — Systems (Minimal)",
  description:
    "Backend systems operator. TypeScript, Node.js, edge and real-time systems — a minimal runbook of deployed work.",
  openGraph: {
    title: "Samarth Nagar — Systems (Minimal)",
    description:
      "Backend systems operator. TypeScript, Node.js, edge and real-time systems — a minimal runbook of deployed work.",
    type: "website",
  },
};

export default function MinimalPage() {
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
