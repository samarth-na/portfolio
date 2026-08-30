import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { research } = content;

export function Research() {
  return (
    <section id="research" className="m-section">
      <div className="m-container">
        <Reveal>
          <h2 className="m-section-title" style={{ marginBottom: "24px" }}>
            {research.title}
          </h2>
          <div className="m-research">
            <span className="m-research-status">
              <span className="m-dot" />
              {research.status}
            </span>

            <h3 className="m-research-title">{research.caseTitle}</h3>
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
