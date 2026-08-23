const projects = [
  {
    id: "PRJ-07",
    title: "Cloud Workspace",
    desc: "Collaborative cloud workspace with real-time messaging, shared tasks, file/image uploads, scheduled meetings, and peer-to-peer video calls. Chat runs on WebSockets with Cloudflare Durable Objects for stateful coordination; role-based access via Better Auth.",
    tags: [
      "Next.js",
      "Cloudflare Workers",
      "Durable Objects",
      "WebSockets",
      "WebRTC",
      "Better Auth",
    ],
    link: "https://github.com/samarth-na/workspace",
  },
  {
    id: "PRJ-06",
    title: "Live Token Meter",
    desc: "OpenCode plugin that tracks live token generation rate, tokens from the last response, total session output, and per-turn usage in real time through the v2 API.",
    tags: ["OpenCode Plugin", "TypeScript", "Streaming Telemetry"],
    link: "https://github.com/samarth-na/live-token-meter",
  },
  {
    id: "PRJ-05",
    title: "SQL Visualizer",
    desc: "SPA that parses SQL schema definitions and renders relational schemas as an interactive architecture graph — tables laid out with their foreign-key relationships.",
    tags: ["SQL Parsing", "Interactive Graph", "SPA"],
    link: "https://schema-visualizer-plum.vercel.app",
  },
  {
    id: "PRJ-04",
    title: "Multi-Tenant SSO Service",
    desc: "Single Sign-On service providing centralized sign-in and authorization across multiple applications. Implements authentication flows, tenant isolation, and security controls on API routes.",
    tags: ["Node.js", "Nitro", "Cloudflare Workers", "D1"],
    link: "https://github.com/samarth-na/single-sign-on",
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-ink/10 bg-cream p-6 md:p-8 hover:border-accent hover:bg-accent/5 transition-all duration-500"
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
