import { MinimalAbout } from "./minimal-about";
import { MinimalExperience } from "./minimal-experience";
import { MinimalFooter } from "./minimal-footer";
import { MinimalHero } from "./minimal-hero";
import { MinimalProjects } from "./minimal-projects";
import { MinimalResearch } from "./minimal-research";
import { MinimalStack } from "./minimal-stack";

/* Shared page body for the minimal layout — used by the landing page (/)
   and the typography variants (/1–/5). Pages own the outer .minimal div so
   they can attach font-variable and variant classes. */
export function MinimalSite() {
  return (
    <main id="main" className="m-page" tabIndex={-1}>
      <MinimalHero />
      <MinimalAbout />
      <MinimalExperience />
      <MinimalProjects />
      <MinimalStack />
      <MinimalResearch />
      <MinimalFooter />
    </main>
  );
}
