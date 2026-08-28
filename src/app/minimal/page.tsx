import { MinimalAbout } from "@/components/minimal/minimal-about";
import { MinimalExperience } from "@/components/minimal/minimal-experience";
import { MinimalFooter } from "@/components/minimal/minimal-footer";
import { MinimalHero } from "@/components/minimal/minimal-hero";
import { MinimalNav } from "@/components/minimal/minimal-nav";
import { MinimalProjects } from "@/components/minimal/minimal-projects";
import { MinimalResearch } from "@/components/minimal/minimal-research";
import { MinimalStack } from "@/components/minimal/minimal-stack";
import "./minimal.css";

export default function MinimalPage() {
  return (
    <div className="minimal">
      <MinimalNav />
      <main>
        <MinimalHero />
        <MinimalAbout />
        <MinimalExperience />
        <MinimalProjects />
        <MinimalStack />
        <MinimalResearch />
      </main>
      <MinimalFooter />
    </div>
  );
}
