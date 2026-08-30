import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { footer } = content;

export function Footer() {
  return (
    <footer className="m-footer" data-spy="footer">
      <div className="m-container">
        <Reveal>
          <div className="m-footer-inner">
            <h2 className="m-footer-title" data-fade-head="footer">
              {footer.title}
            </h2>

            <a className="m-email-row" href={`mailto:${footer.email}`}>
              <span className="m-mono">{footer.email}</span>
              <span className="m-email-arrow" aria-hidden="true">
                →
              </span>
            </a>

            <div className="m-footer-bottom">
              <span>{footer.copyright}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
