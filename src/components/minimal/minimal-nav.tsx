import { content } from "@/data/content";

const { site } = content;

export function MinimalNav() {
  return (
    <header className="m-nav">
      <div className="m-nav-inner">
        <a href="/minimal" className="m-nav-brand">
          <span className="m-star" aria-hidden="true">
            ✳
          </span>
          {site.name}
        </a>
        <nav className="m-nav-links" aria-label="Section navigation">
          {site.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
