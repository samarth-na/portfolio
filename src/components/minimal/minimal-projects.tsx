import type { CSSProperties } from "react";
import { content } from "@/data/content";
import { Reveal } from "../reveal";
import { ArrowUpRightIcon } from "./icons";

const { site, projects } = content;

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

const PREVIEWS = [
  {
    side: ["62%", "86%", "50%"],
    pill: "46%",
    bar: "54%",
    bar2: "72%",
    square: "bottom",
  },
  {
    side: ["50%", "70%", "62%"],
    pill: "60%",
    bar: "40%",
    bar2: "64%",
    square: "top",
  },
  {
    side: ["78%", "54%", "68%"],
    pill: "40%",
    bar: "66%",
    bar2: "44%",
    square: "bottom",
  },
] as const;

const year = site.portfolioDocId.match(/\d{4}/)?.[0] ?? "2026";

export function MinimalProjects() {
  return (
    <section id="projects" className="m-section">
      <div className="m-container">
        <Reveal>
          <div className="m-projects-grid">
            <div className="m-projects-left">
              <div>
                <p className="m-label">{projects.sectionLabel}</p>
                <h2 className="m-section-title">{projects.title}</h2>
                <p className="m-section-intro m-projects-intro">
                  {projects.intro}
                </p>
              </div>
              <div className="m-projects-meta">
                <span className="m-label">SELECTED WORK — {year}</span>
                <span className="m-label">
                  {projects.items.length} PROJECTS
                </span>
              </div>
            </div>

            <div className="m-work">
              <div className="m-work-list">
                {projects.items.map((project, index) => {
                  const preview = PREVIEWS[index % PREVIEWS.length];
                  const accent = ACCENTS[index % ACCENTS.length];
                  const style = { "--dot": accent } as CSSProperties;

                  return (
                    <a
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-card"
                      style={style}
                    >
                      <div className="m-card-head">
                        <span className="m-card-dots" aria-hidden="true">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span>{project.id}</span>
                        <span>{year}</span>
                        <span className="m-card-open">
                          Open
                          <ArrowUpRightIcon />
                        </span>
                      </div>

                      <h3 className="m-card-title">{project.title}</h3>
                      <p className="m-card-desc">{project.desc}</p>

                      <div className="m-card-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="m-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="m-preview" aria-hidden="true">
                        <div className="m-pv-side">
                          <i style={{ width: preview.side[0] }} />
                          <i style={{ width: preview.side[1] }} />
                          <i style={{ width: preview.side[2] }} />
                        </div>
                        <div className="m-pv-main">
                          <span
                            className="m-pv-pill"
                            style={{ width: preview.pill }}
                          />
                          <span
                            className="m-pv-bar"
                            style={{ width: preview.bar }}
                          />
                          <span
                            className="m-pv-bar"
                            style={{ width: preview.bar2 }}
                          />
                        </div>
                        <span className={`m-pv-square ${preview.square}`} />
                      </div>
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
