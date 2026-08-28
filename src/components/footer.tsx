import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { footer, site } = content;

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream px-6 py-20 md:px-12 md:py-32">
      <Reveal className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 overflow-hidden">
            <p className="label text-steel mb-6">{footer.sectionLabel}</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-8">
              {footer.title}
            </h2>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              {footer.intro}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="label text-steel mb-2">EMAIL</p>
                <a
                  href={`mailto:${footer.email}`}
                  className="font-mono text-xl md:text-2xl link-strike hover:text-accent transition-colors"
                >
                  {footer.email}
                </a>
              </div>

              <div>
                <p className="label text-steel mb-3">CHANNELS</p>
                <div className="flex flex-wrap gap-4">
                  {footer.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm border border-cream/20 px-3 py-2 hover:bg-cream hover:text-ink transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/50 text-sm font-mono">
          <span>{footer.copyright}</span>
          <span className="flex items-center gap-2">
            {footer.footerTag}
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-ring" />
          </span>
          <span>DOC ID: {site.docId}</span>
        </div>
      </Reveal>
    </footer>
  );
}
