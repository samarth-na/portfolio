import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { profile } = content;

export function About() {
  return (
    <section id="profile" className="m-section">
      <div className="m-container">
        <Reveal>
          <div className="m-about-card">
            <div className="m-field">
              <span className="m-label">NAME</span>
              <span className="m-field-value">{profile.name}</span>
            </div>
            <div className="m-field">
              <span className="m-label">Focus</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="m-chip">Software Engineer</span>
                <span className="m-chip">DevOps</span>
                <span className="m-chip">System Administration</span>
                <span className="m-chip">TypeScript</span>
                <span className="m-chip">Go</span>
                <span className="m-chip">SQL</span>
                <span className="m-chip">Linux</span>
              </div>
            </div>
            <div className="m-field">
              <span className="m-label">EDUCATION</span>
              <span className="m-field-value m-field-lines">
                {profile.education.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </div>
            <div className="m-field">
              <span className="m-label">LOCATION</span>
              <span className="m-field-value m-field-lines">
                {profile.location.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
