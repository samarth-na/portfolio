"use client";

import { useStaggerReveal } from "@/hooks/use-reveal";

const projects = [
  {
    id: "PRJ-03",
    title: "WASM Video Editor",
    desc: "Browser-based video processing with WebAssembly and FFmpeg. Real-time encoding, decoding, and export pipelines — desktop-grade media processing inside the browser with zero server compute.",
    tags: ["WebAssembly", "FFmpeg", "Node.js", "Client-side"],
    link: "https://github.com/samarth-na/clientside-video-editor",
  },
  {
    id: "PRJ-02",
    title: "Local LLM Interface",
    desc: "Streaming chat interface for locally-hosted AI models. Backend APIs manage model lifecycle — load, unload, swap — reducing cold-start latency and improving runtime orchestration.",
    tags: ["Node.js", "Ollama", "Streaming APIs", "AI"],
    link: "https://github.com/samarth-na/assistant",
  },
  {
    id: "PRJ-01",
    title: "Personal Blog Platform",
    desc: "SEO-optimized static site built with Next.js and MDX. Server-side rendering and edge caching deliver sub-200ms page loads on Vercel's edge network.",
    tags: ["Next.js", "MDX", "SEO", "Edge"],
    link: "https://samarth-na.vercel.app",
  },
  {
    id: "PRJ-00",
    title: "Dotfiles & Dev Environment",
    desc: "Terminal-first Linux workflow configured with Neovim, tmux, fish, and Lazygit. Fedora-based daily driver tuned for backend and systems work.",
    tags: ["Neovim", "tmux", "Fedora", "Shell"],
    link: "https://github.com/samarth-na/dotfiles",
  },
];

export function Projects() {
  const containerRef = useStaggerReveal<HTMLDivElement>(".project-card", 100);

  return (
    <section
      id="projects"
      className="relative bg-paper px-6 py-20 md:px-12 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="min-w-0">
            <p className="label text-text-muted mb-4">03 :: DEPLOYED SYSTEMS</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-ink">
              Projects
            </h2>
          </div>
          <p className="text-text-secondary max-w-md leading-relaxed shrink-0">
            Selected builds where I explored browser-native tech, local AI
            orchestration, and performance-first web systems.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative border border-ink/10 bg-cream p-6 md:p-8 hover:border-accent hover:bg-accent/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-text-muted border border-ink/10 px-2 py-0.5">
                  {project.id}
                </span>
                <span className="text-2xl leading-none text-ink/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium mb-3 text-ink">
                {project.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label text-[10px] text-text-secondary border border-ink/10 px-2 py-1 group-hover:border-accent/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
