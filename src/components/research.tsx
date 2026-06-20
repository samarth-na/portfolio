export function Research() {
  return (
    <section className="relative bg-paper px-6 py-20 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6 overflow-hidden">
            <p className="label text-text-muted mb-6">05 :: CASE STUDIES</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-ink">
              Research
            </h2>
            <p className="mt-6 text-text-secondary leading-relaxed max-w-md">
              Deep dives into production codebases to understand how real
              systems are architected, documented, and shipped.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-ink/10 bg-cream p-6 md:p-10 hover:border-ink/30 transition-colors duration-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-ring" />
                <span className="label text-text-muted">
                  ACTIVE INVESTIGATION
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                react.dev Architecture Deep Dive
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Analyzed the real production codebase behind react.dev to map
                architecture decisions: custom MDX components, a build-time SSG
                pipeline, and the React Compiler already running in production.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "No state management library needed — URL + useState + Context sufficient",
                  "50+ custom MDX components behind each doc page",
                  "Custom SSG pipeline that serializes React tree to JSON at build time",
                  "Build-time eval() workarounds acknowledged as intentional hacks",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="mt-2 w-1 h-1 bg-ink shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://casestudy-reactdotdev.samarth.page/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm border border-ink/20 px-4 py-2 hover:bg-ink hover:text-cream transition-colors duration-300"
                >
                  Read Full Report
                  <span>→</span>
                </a>
                <a
                  href="https://samarthagar.notion.site/react-dev-363452daf74880b38e9df9e24d770dfa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm border border-ink/20 px-4 py-2 hover:bg-ink hover:text-cream transition-colors duration-300"
                >
                  Detailed Notes
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
