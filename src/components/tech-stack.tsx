import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { stack } = content;

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative bg-accent text-ink px-6 py-20 md:px-12 md:py-32 overflow-hidden"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          aria-hidden="true"
          className="absolute top-10 right-10 w-64 h-64 animate-spin-slow"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute bottom-20 left-10 w-96 h-48"
          viewBox="0 0 400 200"
        >
          <rect
            x="20"
            y="20"
            width="360"
            height="160"
            rx="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect
            x="60"
            y="60"
            width="280"
            height="80"
            rx="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 overflow-hidden">
            <p className="label text-ink/60 mb-6">{stack.sectionLabel}</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
              {stack.title}
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed max-w-sm">
              {stack.intro}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stack.categories.map((cat) => (
              <div
                key={cat.name}
                className="border border-ink/20 p-5 hover:bg-ink hover:text-cream transition-colors duration-500"
              >
                <p className="label text-xs mb-4 opacity-70">{cat.name}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-sm md:text-base px-2 py-1 border border-current/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
