import { content } from "@/data/content";
import { GithubIcon, MailIcon } from "./icons";

const { site, footer } = content;

const githubUrl = footer.links.find((link) => link.label === "GitHub")?.url;

export function MinimalHero() {
  return (
    <section className="m-hero">
      <div className="m-hero-inner">
        <h1 className="m-name m-fade">
          <span className="m-star" aria-hidden="true">
            ✳
          </span>
          {site.name}
        </h1>
        <p className="m-tagline m-fade m-fade-1">
          Backend Engineer · TypeScript · SQL · Linux · DevOps
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
        </div>
      </div>

      <a href="#main" className="m-mark" aria-label="Back to top">
        S N
      </a>
    </section>
  );
}
