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
          {/* The shared nav in content.json has no research link, but only
              /minimal renders a research section, so append it here. */}
          {[...site.nav, { label: "RESEARCH", href: "#research" }].map(
            (link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
