import type { Metadata } from "next";
import { MinimalAbout } from "@/components/minimal/minimal-about";
import { MinimalExperience } from "@/components/minimal/minimal-experience";
import { MinimalFooter } from "@/components/minimal/minimal-footer";
import { MinimalHero } from "@/components/minimal/minimal-hero";
import { MinimalProjects } from "@/components/minimal/minimal-projects";
import { MinimalResearch } from "@/components/minimal/minimal-research";
import { MinimalStack } from "@/components/minimal/minimal-stack";
import "../minimal.css";
import "./v2.css";

export const metadata: Metadata = {
  title: "Samarth Nagar — Type Hierarchy v2 (/1)",
  description:
    "Experimental font hierarchy — larger display + stepped H2/H3 scale. Landing (/) unchanged.",
  robots: { index: false, follow: false },
};

export default function PageOne() {
  return (
    <div className="minimal minimal-v2">
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
