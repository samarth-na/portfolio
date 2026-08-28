import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { research } = content;

export function Research() {
  return (
    <section className="relative bg-paper px-6 py-20 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-center">
          <div className="lg:col-span-6 overflow-hidden">
            <p className="label text-text-muted mb-6">
              {research.sectionLabel}
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-ink">
              {research.title}
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed max-w-md">
              {research.intro}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-3 dotted-frame opacity-30 pointer-events-none" />
              <div className="relative border border-ink/20 bg-cream p-6 md:p-10 hover:border-ink/40 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse-ring" />
                  <span className="label text-text-muted">
                    {research.status}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-medium mb-4">
                  {research.caseTitle}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {research.body}
                </p>

                <ul className="space-y-3 mb-8">
                  {research.points.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span className="mt-2 w-1 h-1 bg-ink shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  {research.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-sm border border-ink/20 px-4 py-2 hover:bg-ink hover:text-cream transition-colors duration-300"
                    >
                      {link.label}
                      <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
