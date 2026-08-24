export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-paper px-6 md:px-12">
      {/* Top ticker */}
      <div className="absolute top-0 left-0 right-0 border-b border-ink/10 bg-cream/50 overflow-hidden py-2">
        <div className="flex whitespace-nowrap animate-marquee-slow">
          <span className="label text-text-secondary mx-8 flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            PORTFOLIO DOC :: ID: SN-2026
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-steel" />
            BACKEND ENGINEER
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate" />
            SYSTEMS &amp; INFRASTRUCTURE
          </span>
          <span
            className="label text-text-secondary mx-8 flex items-center gap-3"
            aria-hidden="true"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            PORTFOLIO DOC :: ID: SN-2026
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-steel" />
            BACKEND ENGINEER
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate" />
            SYSTEMS &amp; INFRASTRUCTURE
          </span>
          <span
            className="label text-text-secondary mx-8 flex items-center gap-3"
            aria-hidden="true"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            PORTFOLIO DOC :: ID: SN-2026
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-steel" />
            BACKEND ENGINEER
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate" />
            SYSTEMS &amp; INFRASTRUCTURE
          </span>
          <span
            className="label text-text-secondary mx-8 flex items-center gap-3"
            aria-hidden="true"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            PORTFOLIO DOC :: ID: SN-2026
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-steel" />
            BACKEND ENGINEER
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate" />
            SYSTEMS &amp; INFRASTRUCTURE
          </span>
        </div>
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute top-32 right-8 md:top-40 md:right-20">
        <div className="w-20 h-20 md:w-32 md:h-32 border border-ink/20 rounded-full" />
        <div className="absolute inset-0 m-auto w-10 h-10 md:w-16 md:h-16 border border-ink/40 rounded-full animate-pulse-ring" />
      </div>

      {/* Main content, aligned to the page column */}
      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 flex flex-col justify-between pb-10 md:pb-12">
        <div className="flex-1 flex flex-col justify-center pt-24 md:pt-32">
          <div className="animate-reveal-up">
            <p className="label text-text-muted mb-4 md:mb-6">
              SUBJECT :: SAMARTH NAGAR
            </p>
            <h1 className="font-display text-[clamp(3rem,16vw,14rem)] leading-[0.82] tracking-tight text-ink">
              SYSTEM
              <span className="block text-steel">OPERATOR</span>
            </h1>
          </div>

          <div
            className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl animate-reveal-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="border-t border-ink/20 pt-4">
              <p className="label text-text-muted mb-2">ROLE</p>
              <p className="text-lg md:text-xl font-medium leading-snug">
                Backend Software Engineer · TypeScript · Node.js · SQL
              </p>
            </div>
            <div className="border-t border-ink/20 pt-4">
              <p className="label text-text-muted mb-2">ORIGIN</p>
              <p className="text-lg md:text-xl font-medium leading-snug">
                Indore, India
              </p>
            </div>
            <div className="border-t border-ink/20 pt-4">
              <p className="label text-text-muted mb-2">STATUS</p>
              <p className="text-lg md:text-xl font-medium leading-snug flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-ring" />
                Available for opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between border-t border-ink/10 pt-4 md:pt-6">
          <div className="flex flex-col gap-1">
            <span className="label text-text-muted">DOC ID</span>
            <span className="font-mono text-sm md:text-base">
              SN-RESUME-0626
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#profile"
              className="label link-strike text-text-secondary hover:text-ink transition-colors"
            >
              PROFILE
            </a>
            <a
              href="#experience"
              className="label link-strike text-text-secondary hover:text-ink transition-colors"
            >
              EXPERIENCE
            </a>
            <a
              href="#projects"
              className="label link-strike text-text-secondary hover:text-ink transition-colors"
            >
              PROJECTS
            </a>
            <a
              href="#stack"
              className="label link-strike text-text-secondary hover:text-ink transition-colors"
            >
              STACK
            </a>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="label text-text-muted">CLASSIFICATION</span>
            <span className="font-mono text-sm md:text-base">PUBLIC</span>
          </div>
        </div>
      </div>
    </section>
  );
}
