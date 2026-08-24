import { Reveal } from "./reveal";

const links = [
  { label: "GitHub", url: "https://github.com/samarth-na" },
  { label: "X / Twitter", url: "https://x.com/samarth7na" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/na-samarth/" },
  { label: "Portfolio", url: "https://samarth-na.vercel.app" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream px-6 py-20 md:px-12 md:py-32">
      <Reveal className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 overflow-hidden">
            <p className="label text-steel mb-6">06 :: TRANSMISSION</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-8">
              Let&apos;s build systems.
            </h2>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Open to internships, freelance systems work, and collaborations on
              backend infrastructure, DevOps, and browser-native products.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="label text-steel mb-2">EMAIL</p>
                <a
                  href="mailto:samarth07nagar@gmail.com"
                  className="font-mono text-xl md:text-2xl link-strike hover:text-accent transition-colors"
                >
                  samarth07nagar@gmail.com
                </a>
              </div>

              <div>
                <p className="label text-steel mb-3">CHANNELS</p>
                <div className="flex flex-wrap gap-4">
                  {links.map((link) => (
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
          <span>© 2026 SAMARTH NAGAR</span>
          <span className="flex items-center gap-2">
            BACKED BY GOD AND FOSS
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-ring" />
          </span>
          <span>DOC ID: SN-RESUME-0626</span>
        </div>
      </Reveal>
    </footer>
  );
}
