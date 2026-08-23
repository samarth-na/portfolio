import { DesignWorkshopSection } from "@/components/design-workshop-section";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProfileCard } from "@/components/profile-card";
import { Projects } from "@/components/projects";
import { RelaySection } from "@/components/relay-section";
import { Research } from "@/components/research";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <ProfileCard />
      <Experience />
      <Projects />
      <TechStack />
      <Research />
      <Footer />
    </main>
  );
}
