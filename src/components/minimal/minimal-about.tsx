import { content } from "@/data/content";
import { Reveal } from "../reveal";

const { profile } = content;

export function MinimalAbout() {
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
              <span className="m-label">Role</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="m-chip">Backend Engineer</span>
                <span className="m-chip">TypeScript</span>
                <span className="m-chip">SQL</span>
                <span className="m-chip">Linux</span>
                <span className="m-chip">DevOps</span>
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
