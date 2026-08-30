"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";
import "./test.css";

const { site, profile, experience, projects, stack, papers, research } =
  content;

/* Headers in DOM order — the slot shows exactly one at a time. */
const SECTIONS = [
  { id: "t-about", label: "01 :: ABOUT RECORD", title: "Collected" },
  {
    id: "t-experience",
    label: experience.sectionLabel,
    title: experience.title,
  },
  { id: "t-projects", label: projects.sectionLabel, title: projects.title },
  { id: "t-stack", label: stack.sectionLabel, title: stack.title },
  { id: "t-papers", label: papers.sectionLabel, title: papers.title },
  { id: "t-research", label: "06 :: CASE STUDIES", title: research.title },
];

const count = SECTIONS.length;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function SectionBlock({
  slotId,
  index,
  register,
  children,
}: {
  slotId: string;
  index: number;
  register: (el: HTMLElement | null) => void;
  children: ReactNode;
}) {
  return (
    <section ref={register} data-slot-id={slotId} className="t-section">
      <div className="t-block">{children}</div>
      {index < count - 1 ? (
        <div className="t-gap" aria-hidden="true">
          <span className="t-gap-line" />
          <span className="t-gap-idx">
            {pad(index + 1)} / {pad(count)}
          </span>
          <span className="t-gap-line" />
        </div>
      ) : null}
    </section>
  );
}

export default function TestPage() {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState<string | null>(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    let ticking = false;

    // Trigger line sits where the pinned title bar meets the content below
    // it. A section becomes active when its top crosses this line.
    const TRIGGER = 64;

    const update = () => {
      ticking = false;
      let next: string | null = null;
      let progress = 0;

      for (const el of sectionRefs.current) {
        if (!el) break;
        const rect = el.getBoundingClientRect();
        if (rect.top <= TRIGGER) {
          next = el.dataset.slotId ?? null;
          const height = rect.bottom - rect.top;
          progress =
            height > 0
              ? Math.min(1, Math.max(0, (TRIGGER - rect.top) / height))
              : 0;
        } else {
          break;
        }
      }

      setActive((prev) => (prev === next ? prev : next));
      setFill((prev) => (Math.abs(prev - progress) < 0.01 ? prev : progress));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    // Re-run after layout settles so the initial trigger line is accurate.
    const delayed = window.setTimeout(update, 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.clearTimeout(delayed);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = SECTIONS.findIndex((section) => section.id === active);

  return (
    <main className="t-page">
      {/* Pinned title slot — one visible title at a time. */}
      <div className="t-slot" aria-live="polite">
        <div className="t-slot-inner">
          <div className="t-slot-stack">
            <div
              className={`t-slot-item t-slot-default ${active ? "" : "is-on"}`}
            >
              <span className="t-slot-label">Index</span>
              <span className="t-slot-title">{site.name}</span>
            </div>
            {SECTIONS.map((section) => (
              <div
                key={section.id}
                className={`t-slot-item ${active === section.id ? "is-on" : ""}`}
              >
                <span
                  className="t-slot-label"
                  aria-hidden={active !== section.id ? "true" : undefined}
                >
                  {section.label}
                </span>
                <h2 id={`${section.id}-title`} className="t-slot-title">
                  {section.title}
                </h2>
              </div>
            ))}
          </div>
          <div className="t-slot-count">
            <span>{activeIndex >= 0 ? pad(activeIndex + 1) : "--"}</span>
            <span aria-hidden="true">/ {pad(count)}</span>
          </div>
        </div>
        <div className="t-slot-track" aria-hidden="true">
          <span
            className="t-slot-track-fill"
            style={{ width: `${fill * 100}%` }}
          />
        </div>
      </div>

      <header className="t-hero">
        <span className="t-hero-label">
          Route :: /test — pinned section headers
        </span>
        <h1 className="t-hero-title">
          One section title <em>sticks</em> at a time.
        </h1>
        <p className="t-hero-note">
          Each title pins to the top of the viewport while its section scrolls.
          When the section is done and the next one arrives, the old title
          slides out and the new one fades in — a crossfade with no overlap.
          Sections are separated by wide gaps with a hairline divider.
        </p>
        <a className="t-hero-back" href="/">
          &larr; back to main page
        </a>
      </header>

      <SectionBlock
        slotId="t-about"
        index={0}
        register={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <p className="t-lead">Systems, infrastructure, performance.</p>
        <p className="t-copy">
          Final-year computer science student building TypeScript and Node.js
          applications, APIs, relational-database-heavy systems, and real-time
          features. This section exists to give the pinned header a decent
          amount of scroll distance before the next cut.
        </p>
        <ul className="t-list">
          {profile.education.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock
        slotId="t-experience"
        index={1}
        register={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        {experience.items.map((exp) => (
          <article key={exp.id} className="t-card">
            <div className="t-card-meta">
              <span>{exp.id}</span>
              <span>{exp.period}</span>
            </div>
            <h3 className="t-card-title">{exp.role}</h3>
            <p className="t-card-desc">@ {exp.org}</p>
            <div className="t-card-tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="t-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </SectionBlock>

      <SectionBlock
        slotId="t-projects"
        index={2}
        register={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <div className="t-cards">
          {projects.items.map((project) => (
            <article key={project.id} className="t-card">
              <div className="t-card-meta">
                <span>{project.id}</span>
                <span>{project.tags[0]}</span>
              </div>
              <h3 className="t-card-title">{project.title}</h3>
              <p className="t-card-desc">{project.desc}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        slotId="t-stack"
        index={3}
        register={(el) => {
          sectionRefs.current[3] = el;
        }}
      >
        <p className="t-copy">{stack.tagline}</p>
        <div className="t-stack-grid">
          {stack.categories.map((category) => (
            <div key={category.name} className="t-card">
              <span className="t-mono">{category.name}</span>
              <div className="t-card-tags">
                {category.items.map((item) => (
                  <span key={item} className="t-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        slotId="t-papers"
        index={4}
        register={(el) => {
          sectionRefs.current[4] = el;
        }}
      >
        {papers.items.map((paper) => (
          <article key={paper.id} className="t-card">
            <div className="t-card-meta">
              <span>{paper.id}</span>
              <span>{paper.meta}</span>
            </div>
            <h3 className="t-card-title">{paper.title}</h3>
            <p className="t-card-desc">{paper.desc}</p>
            <div className="t-card-tags">
              {paper.tags.map((tag) => (
                <span key={tag} className="t-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </SectionBlock>

      <SectionBlock
        slotId="t-research"
        index={5}
        register={(el) => {
          sectionRefs.current[5] = el;
        }}
      >
        <p className="t-copy">{research.body}</p>
        <ul className="t-list">
          {research.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </SectionBlock>

      <footer className="t-end">
        <span className="t-mono">
          End of test route · {pad(count)} sections
        </span>
        <a className="t-hero-back" href="/">
          &larr; back to main page
        </a>
      </footer>
    </main>
  );
}
