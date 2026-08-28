import { content } from "@/data/content";
import { Reveal } from "../reveal";

const { profile } = content;

export function MinimalAbout() {
  return (
    <section id="profile" className="m-section">
      <div className="m-container">
        <Reveal>
          <div className="m-section-head">
            <div>
              <p className="m-label">{profile.sectionLabel}</p>
              <h2 className="m-section-title">{profile.title}</h2>
            </div>
          </div>

          <div className="m-about-grid">
            <p className="m-about-lede">{profile.summary}</p>

            <div className="m-about-card">
              <div className="m-field">
                <span className="m-label">SUBJECT NAME</span>
                <span className="m-field-value">{profile.subjectName}</span>
              </div>
              <div className="m-field">
                <span className="m-label">DOCUMENT ID</span>
                <span className="m-chip">{profile.documentId}</span>
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
