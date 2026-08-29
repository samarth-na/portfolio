import { content } from "@/data/content";
import { Reveal } from "../reveal";

const { experience: experienceData } = content;

export function MinimalExperience() {
  return (
    <section id="experience" className="m-section">
      <div className="m-container">
        <Reveal>
          <div className="m-exp-list">
            {experienceData.items.map((exp) => (
              <article key={exp.id} className="m-exp">
                <div className="m-exp-top">
                  <div className="m-exp-meta">
                    <span className="m-exp-id">{exp.id}</span>
                    <span>{exp.period}</span>
                  </div>
                  <div className="m-exp-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="m-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="m-exp-role">{exp.role}</h3>
                <p className="m-exp-org">@ {exp.org}</p>

                <ul className="m-exp-points">
                  {exp.points.map((point) => (
                    <li key={point} className="m-exp-point">
                      <span className="m-marker" aria-hidden="true" />
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
