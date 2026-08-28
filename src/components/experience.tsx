import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { experience: experienceData } = content;

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-ink text-cream px-6 py-20 md:px-12 md:py-32 stripes"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 overflow-hidden">
            <p className="label text-steel mb-6">
              {experienceData.sectionLabel}
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
              {experienceData.title}
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed max-w-sm">
              {experienceData.intro}
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {experienceData.items.map((exp) => (
              <article
                key={exp.id}
                className="group border-t border-cream/20 pt-6 pb-2 hover:bg-cream/5 transition-colors duration-500"
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
                  <div className="flex flex-wrap gap-2">
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
        </Reveal>
      </div>
    </section>
  );
}
