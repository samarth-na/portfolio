import { About } from "./about";
import { Experience } from "./experience";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Papers } from "./papers";
import { Projects } from "./projects";
import { Research } from "./research";
import { SectionRules } from "./section-rules";
import { SectionScrollSpy } from "./section-spy";
import { Stack } from "./stack";

/* Site — composes all sections for the landing page. */
export function Site() {
  return (
    <main id="main" className="m-page" tabIndex={-1}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Papers />
      <Research />
      <Footer />
      <SectionScrollSpy />
      <SectionRules />
    </main>
  );
}
