import type { CSSProperties } from "react";
import { content } from "@/data/content";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";

const { papers } = content;

/* Status dot per paper — order matches content.json items. */
const DOTS: Record<string, string> = {
  "PAP-01": "#4ade80",
  "PAP-02": "#4ade80",
  "PAP-03": "#fbbf24",
  "PAP-04": "#ff3b1f",
};

export function Papers() {
  return (
    <section id="papers" className="m-section">
      <div className="m-container">
        <div className="m-projects-grid">
          <div className="m-projects-left">
            <Reveal>
              <span className="m-label">{papers.sectionLabel}</span>
              <h2 className="m-section-title">{papers.title}</h2>
              <p className="m-tagline">{papers.tagline}</p>
              <div className="m-hero-meta">
                {papers.meta.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="m-work">
            <div className="m-work-list">
              {papers.items.map((paper) => (
                <Reveal key={paper.id}>
                  <a
                    href={paper.link}
                    className="m-card"
                    style={
                      { "--dot": DOTS[paper.id] ?? "#4ade80" } as CSSProperties
                    }
                    aria-label={`${paper.title} — ${paper.desc}`}
                    title={paper.title}
                  >
                    <div className="m-card-head">
                      <span className="m-card-dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span>{paper.meta}</span>
                      <span className="m-card-open">
                        Open <ArrowUpRightIcon />
                      </span>
                    </div>
                    <h3 className="m-card-title">{paper.title}</h3>
                    <p className="m-card-desc">{paper.desc}</p>
                    <div className="m-card-tags">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="m-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
