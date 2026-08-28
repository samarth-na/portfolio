import { content } from "@/data/content";
import { Reveal } from "../reveal";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons";

const { footer, site, profile } = content;

const socialIcons = [
  { label: "GitHub", url: footer.links.find((l) => l.label === "GitHub")?.url },
  {
    label: "X / Twitter",
    url: footer.links.find((l) => l.label === "X / Twitter")?.url,
  },
  {
    label: "LinkedIn",
    url: footer.links.find((l) => l.label === "LinkedIn")?.url,
  },
].filter((link): link is { label: string; url: string } => Boolean(link.url));

export function MinimalFooter() {
  return (
    <footer className="m-footer">
      <div className="m-container">
        <Reveal>
          <div className="m-footer-inner">
            <p className="m-label">{footer.sectionLabel}</p>
            <h2 className="m-footer-title m-serif">{footer.title}</h2>
            <p className="m-footer-intro">{footer.intro}</p>

            <span className="m-label m-email-label">EMAIL</span>
            <a className="m-email-row" href={`mailto:${footer.email}`}>
              <span className="m-mono">{footer.email}</span>
              <span className="m-email-arrow" aria-hidden="true">
                →
              </span>
            </a>

            <div className="m-footer-middle">
              <div className="m-channel-list">
                {footer.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-arrow-link"
                  >
                    <span className="m-arrow" aria-hidden="true">
                      →
                    </span>
                    {link.label}
                    <span className="m-arrow-link-url">{link.url}</span>
                  </a>
                ))}
              </div>

              <div className="m-socials">
                {socialIcons.map((link) => (
                  <a
                    key={link.label}
                    className="m-social"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.label === "GitHub" && <GithubIcon />}
                    {link.label === "X / Twitter" && <XIcon />}
                    {link.label === "LinkedIn" && <LinkedInIcon />}
                  </a>
                ))}
              </div>
            </div>

            <p className="m-footer-meta">
              BASED IN {profile.location.join(" · ")}
            </p>

            <div className="m-footer-bottom">
              <span>{footer.copyright}</span>
              <span>{footer.footerTag}</span>
              <span>DOC ID: {site.docId}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
