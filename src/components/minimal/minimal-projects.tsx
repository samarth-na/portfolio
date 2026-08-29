import type { CSSProperties } from "react";
import { content } from "@/data/content";
import { Reveal } from "../reveal";
import { ArrowUpRightIcon } from "./icons";

const { projects } = content;

const ACCENTS = [
  "#4ade80",
  "#60a5fa",
  "#fbbf24",
  "#f472b6",
  "#a78bfa",
  "#34d399",
  "#f97316",
  "#38bdf8",
];

const GLYPHS: Record<string, string> = {
  "PRJ-07": "◈",
  "PRJ-06": "◐",
  "PRJ-05": "⬢",
  "PRJ-04": "⬣",
  "PRJ-03": "◆",
  "PRJ-02": "⬔",
  "PRJ-01": "▭",
  "PRJ-00": "≡",
};

export function MinimalProjects() {
  return (
    <section id="projects" className="m-section">
      <div className="m-container">
        <Reveal>
          <div className="m-projects-grid">
            <div className="m-projects-left">
              <h2 className="m-section-title">{projects.title}</h2>
            </div>

            <div className="m-work">
              <div className="m-work-list">
                {projects.items.map((project, index) => {
                  const accent = ACCENTS[index % ACCENTS.length];
                  const style = { "--dot": accent } as CSSProperties;
                  const glyph = GLYPHS[project.id] ?? "·";

                  return (
                    <a
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-shot"
                      style={style}
                      aria-label={`${project.title} — ${project.desc}`}
                      title={project.title}
                    >
                      {project.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          loading="lazy"
                          decoding="async"
                          className="m-shot-img"
                        />
                      ) : (
                        <div className="m-shot-placeholder" aria-hidden="true">
                          <span className="m-glyph m-glyph-lg">{glyph}</span>
                          <span className="m-shot-id">{project.id}</span>
                          <span className="m-shot-title">{project.title}</span>
                          <span className="m-shot-hint">Screenshot coming</span>
                        </div>
                      )}
                      <span className="m-shot-overlay" aria-hidden="true">
                        <span className="m-shot-overlay-id">{project.id}</span>
                        <span className="m-shot-overlay-title">
                          {project.title}
                        </span>
                        <span className="m-shot-overlay-open">
                          Open <ArrowUpRightIcon />
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
