import { content } from "@/data/content";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "./icons";

const { site, hero, profile, projects, stack, footer } = content;

const currentBuild = projects.items[0];

const socialLinks = {
  github: footer.links.find((link) => link.label === "GitHub"),
  x: footer.links.find((link) => link.label === "X / Twitter"),
  linkedin: footer.links.find((link) => link.label === "LinkedIn"),
};

const buildTime = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
}).format(new Date());

export function MinimalHero() {
  return (
    <section className="m-hero">
      <aside className="m-hero-inner">
        <div>
          <h1 className="m-name m-fade">
            <span className="m-star" aria-hidden="true">
              ✳
            </span>
            {site.name}
          </h1>
          <p className="m-tagline m-fade m-fade-1">{hero.role.value}</p>

          <p className="m-statement m-serif m-fade m-fade-2">{profile.text}</p>

          <p className="m-building m-fade m-fade-3">
            Currently building
            <a
              href={currentBuild.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentBuild.title}
              <ArrowUpRightIcon />
            </a>
          </p>

          <ul className="m-pills m-fade m-fade-4">
            {socialLinks.github && (
              <li>
                <a
                  className="m-pill"
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </li>
            )}
            {socialLinks.x && (
              <li>
                <a
                  className="m-pill"
                  href={socialLinks.x.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon />
                  {socialLinks.x.label}
                </a>
              </li>
            )}
            {socialLinks.linkedin && (
              <li>
                <a
                  className="m-pill"
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
            )}
            <li>
              <a className="m-pill" href={`mailto:${footer.email}`}>
                <MailIcon />
                Email
              </a>
            </li>
          </ul>

          <div className="m-diff m-mono m-fade m-fade-5" aria-hidden="true">
            <span className="m-diff-del">
              -{" "}
              <b>
                {footer.links.find((link) => link.label === "Portfolio")?.url}
              </b>
            </span>
            <span className="m-diff-add">+ /minimal</span>
          </div>

          <p className="m-status m-fade m-fade-6">
            <span className="m-dot" />
            {site.status}
          </p>
        </div>

        <div className="m-hero-meta m-fade m-fade-6">
          <span>
            {stack.categories.length} SYSTEMS · TYPESCRIPT · EDGE · REAL-TIME
          </span>
          <span>VERSION 04 - {buildTime} IST</span>
          <span>{footer.footerTag}</span>
        </div>
      </aside>

      <a
        href="/minimal"
        className="m-mark"
        aria-label="Samarth Nagar — back to top"
      >
        S N
      </a>
    </section>
  );
}
