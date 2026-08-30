"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";

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

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeProject =
    activeIndex !== null ? projects.items[activeIndex] : null;

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const update = () => {
      ticking = false;
      // Trigger line just below the sticky header. On desktop the header
      // sticks at 144px; keep the line a bit below it so the card that
      // sits under the header becomes active.
      const triggerY = Math.max(180, window.innerHeight * 0.38);
      let next: number | null = null;

      for (let i = 0; i < itemRefs.current.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          next = i;
          break;
        }
      }

      // When the trigger sits in the gap between two cards `next` stays
      // null — the description briefly disappears, then the next card's
      // description fades in as it crosses the line.
      setActiveIndex((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    // Re-run after the Reveal entrance finishes (translateY 20px → 0)
    // so the trigger line matches the final layout.
    const delayed = window.setTimeout(update, 700);

    // Screenshots load lazily; re-evaluate the trigger line as each one
    // resolves so the active description appears on the first scroll pass,
    // not only after a later scroll event (common on slow mobile networks).
    const imgs: HTMLImageElement[] = [];
    for (const el of itemRefs.current) {
      if (!el) continue;
      for (const img of el.querySelectorAll("img")) {
        imgs.push(img);
        if (!img.complete) img.addEventListener("load", update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearTimeout(delayed);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      for (const img of imgs) img.removeEventListener("load", update);
    };
  }, []);

  return (
    <section id="projects" className="m-section">
      <div className="m-container">
        <Reveal>
          <div className="m-projects-grid">
            <div className="m-projects-left">
              <div>
                <span className="m-label">{projects.sectionLabel}</span>
                <h2 className="m-section-title">{projects.title}</h2>
              </div>
              <div
                className={`m-projects-active ${activeProject ? "is-visible" : ""}`}
                aria-live="polite"
                aria-atomic="true"
              >
                {activeProject ? (
                  <div
                    key={activeProject.id}
                    className="m-projects-active-inner"
                  >
                    <div className="m-projects-active-kicker">
                      {activeProject.id} — {activeProject.title}
                    </div>
                    <p className="m-projects-active-desc">
                      {activeProject.desc}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="m-work">
              <div className="m-work-list">
                {projects.items.map((project, index) => {
                  const accent = ACCENTS[index % ACCENTS.length];
                  const style = { "--dot": accent } as CSSProperties;
                  const glyph = GLYPHS[project.id] ?? "·";
                  const isActive = activeIndex === index;

                  return (
                    <a
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      data-index={index}
                      data-active={isActive ? "true" : "false"}
                      className={`m-shot ${isActive ? "is-active" : ""}`}
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
