import { content } from "@/data/content";
import { GithubIcon, LinkedInIcon, MailIcon, XIcon } from "./icons";

const { site, footer } = content;

const githubUrl = footer.links.find((link) => link.label === "GitHub")?.url;
const xUrl = footer.links.find((link) => link.label === "X / Twitter")?.url;
const linkedInUrl = footer.links.find((link) => link.label === "LinkedIn")?.url;

export function MinimalHero() {
  return (
    <section className="m-hero">
      <div className="m-hero-inner">
        <h1 className="m-name m-fade font-mono">{site.name}</h1>
        <p className="m-tagline m-fade m-fade-1">
          Backend Engineer · TypeScript · SQL · Linux · DevOps
        </p>
        <p className="m-statement m-fade m-fade-1">
          I build TypeScript &amp; Node.js applications, APIs and real-time
          systems, focused on reliability, performance and clean data models.
        </p>

        <div className="m-hero-ctas m-fade m-fade-2">
          <a className="m-cta m-cta-primary" href={`mailto:${footer.email}`}>
            <MailIcon />
            Email
          </a>
          {githubUrl && (
            <a
              className="m-cta"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              GitHub
            </a>
          )}
          {linkedInUrl && (
            <a
              className="m-cta"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          )}
          {xUrl && (
            <a
              className="m-cta"
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />X
            </a>
          )}
        </div>
      </div>

      <a href="#main" className="m-mark" aria-label="Back to top">
        S N
      </a>
    </section>
  );
}
