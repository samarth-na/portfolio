import { content } from "@/data/content";
import { Reveal } from "../reveal";

const { research } = content;

function cleanLabel(label: string) {
  return label.replace(/^\d+\s*::\s*/, "").trim();
}

export function MinimalResearch() {
  return (
    <section id="research" className="m-section">
      <div className="m-container">
        <Reveal>
          <div className="m-section-head">
            <div>
              <p className="m-label">{cleanLabel(research.sectionLabel)}</p>
              <h2 className="m-section-title">{research.title}</h2>
            </div>
            <p className="m-section-intro">{research.intro}</p>
          </div>

          <div className="m-research">
            <span className="m-research-status">
              <span className="m-dot" />
              {research.status}
            </span>

            <h3 className="m-research-title m-serif">{research.caseTitle}</h3>
            <p className="m-research-body">{research.body}</p>

            <ul className="m-research-points">
              {research.points.map((point) => (
                <li key={point} className="m-research-point">
                  <span className="m-marker" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="m-research-links">
              {research.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-arrow-link"
                  title={link.url}
                >
                  <span className="m-arrow" aria-hidden="true">
                    →
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
