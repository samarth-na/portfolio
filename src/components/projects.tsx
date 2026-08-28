import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { projects } = content;

export function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-paper px-6 py-20 md:px-12 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="min-w-0">
            <p className="label text-text-muted mb-4">
              {projects.sectionLabel}
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-ink">
              {projects.title}
            </h2>
          </div>
          <p className="text-text-secondary max-w-md leading-relaxed shrink-0">
            {projects.intro}
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.items.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-ink/10 bg-cream p-6 md:p-8 hover:border-accent hover:bg-accent/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-text-muted border border-ink/10 px-2 py-0.5">
                  {project.id}
                </span>
                <span className="text-2xl leading-none text-ink/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium mb-3 text-ink">
                {project.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label text-[10px] text-text-secondary border border-ink/10 px-2 py-1 group-hover:border-accent/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
