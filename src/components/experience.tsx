"use client";

import { useStaggerReveal } from "@/hooks/use-reveal";

const experiences = [
  {
    id: "EXP-03",
    role: "Backend Engineering Intern",
    org: "Brand Collabs",
    period: "Jan 2026 – Present",
    tags: ["Security", "Docker", "Supabase", "API Audit"],
    points: [
      "Built static code generation pipeline automating asset workflows",
      "Deployed fully offline Supabase instance with containerized infrastructure",
      "Audited API security across internal services and resolved critical vulnerabilities",
      "Authored backend documentation and technical workflows",
    ],
  },
  {
    id: "EXP-02",
    role: "Smart India Hackathon Finalist",
    org: "National Competition",
    period: "2025",
    tags: ["Healthcare", "Mapping", "Full Stack"],
    points: [
      "Built healthcare mapping platform for locating nearby medical facilities",
      "Competed nationally with a production-ready prototype",
    ],
  },
  {
    id: "EXP-01",
    role: "MSME Incubation Collaboration",
    org: "Government-backed Initiative",
    period: "2024",
    tags: ["Data Pipeline", "Architecture", "Research"],
    points: [
      "Designed data collection pipelines with postgraduate researchers",
      "Shaped system architecture for a public-sector initiative",
    ],
  },
];

export function Experience() {
  const containerRef = useStaggerReveal<HTMLDivElement>(".exp-item", 120);

  return (
    <section
      id="experience"
      className="relative bg-ink text-cream px-6 py-20 md:px-12 md:py-32 stripes"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label text-steel mb-6">02 :: FIELD REPORT</p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
              Experience
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed max-w-sm">
              Deployment logs from internships, hackathons, and research
              collaborations. Each entry represents a live system I helped ship
              or secure.
            </p>
          </div>

          <div ref={containerRef} className="lg:col-span-8 flex flex-col gap-6">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="exp-item group border-t border-cream/20 pt-6 pb-2 hover:bg-cream/5 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-steel border border-cream/20 px-2 py-0.5">
                        {exp.id}
                      </span>
                      <span className="label text-steel">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-cream/60 mt-1">@ {exp.org}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="label text-xs text-cream/80 border border-cream/20 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-cream/80 leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
