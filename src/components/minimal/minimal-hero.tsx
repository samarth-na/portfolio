import { content } from "@/data/content";
import { GithubIcon, MailIcon } from "./icons";

const { site, profile, stack, footer, projects } = content;

// Thesis is the first sentence of the summary — the strongest claim.
// biome-ignore lint/style/useTemplate: concatenation preserves fallback chain
const thesis = profile.summary.split(".")[0]?.trim() + "." || profile.text;

const githubUrl = footer.links.find((link) => link.label === "GitHub")?.url;

export function MinimalHero() {
  return (
    <section className="m-hero" aria-labelledby="hero-thesis">
      <div className="m-hero-inner">
        <p className="m-eyebrow m-fade">
          <span className="m-star" aria-hidden="true">
            ✳
          </span>{" "}
          {site.name} — Backend Systems Operator · Indore, India
        </p>

        <h1 id="hero-thesis" className="m-statement m-serif m-fade m-fade-1">
          {thesis}
        </h1>

        <p className="m-log m-mono m-fade m-fade-2" aria-hidden="true">
          <span className="m-log-prompt">sam@edge:~$</span> deploy --region
          indore · {stack.categories.length} systems · {projects.items.length}{" "}
          deploys → live
          <span className="m-caret" aria-hidden="true" />
        </p>

        <div className="m-hero-ctas m-fade m-fade-3">
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
