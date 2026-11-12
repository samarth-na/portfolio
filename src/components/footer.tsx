import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { footer } = content;

const linkedInUrl = footer.links.find((link) => link.label === "LinkedIn")?.url;
const linkedInLabel = linkedInUrl
  ?.replace(/^https?:\/\/(www\.)?/, "")
  .replace(/\/$/, "");

export function Footer() {
  return (
    <footer className="m-footer" data-spy="footer">
      <div className="m-container">
        <Reveal>
          <div className="m-footer-inner">
            <h2 className="m-footer-title" data-fade-head="footer">
              {footer.title}
            </h2>

            {linkedInUrl && (
              <a
                className="m-contact-row"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="m-mono">{linkedInLabel}</span>
                <span className="m-contact-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            )}

            <div className="m-footer-bottom">
              <span>{footer.copyright}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
