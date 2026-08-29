import type { CSSProperties } from "react";
import { content } from "@/data/content";
import { Reveal } from "../reveal";

const { stack } = content;

// Brand / logo colors for per-tag borders.
const TAG_COLORS: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  Bash: "#4eaa25",
  PHP: "#777bb4",
  Lua: "#2c5bb4",
  "Node.js": "#339933",
  Express: "#e5e7eb",
  "REST APIs": "#38bdf8",
  WebSockets: "#22d3ee",
  WebRTC: "#f472b6",
  "HTTP Streaming": "#f59e0b",
  Authentication: "#a78bfa",
  RBAC: "#34d399",
  PostgreSQL: "#5b9bd5",
  MySQL: "#f29111",
  SQLite: "#47a9e0",
  libSQL: "#ff6b35",
  MongoDB: "#47a248",
  Elasticsearch: "#facc15",
  Docker: "#2496ed",
  Kubernetes: "#326ce5",
  "CI/CD": "#fc6d26",
  Linux: "#fcc624",
  SSH: "#a1a1aa",
  VPS: "#9ca3af",
  AWS: "#ff9900",
  Azure: "#0078d4",
  "Cloudflare Workers": "#f38020",
  "Durable Objects": "#f38020",
  D1: "#f38020",
  Vercel: "#ffffff",
  UploadThing: "#ef4444",
  "Better Auth": "#a78bfa",
  "Next.js": "#ffffff",
  React: "#61dafb",
  Nitro: "#ec598f",
  Neovim: "#57a143",
  tmux: "#1bb91f",
  fish: "#7dd3ce",
};

export function MinimalStack() {
  return (
    <section id="stack" className="m-section">
      <div className="m-container">
        <div className="m-projects-grid">
          <div className="m-projects-left">
            <Reveal>
              <h2 className="m-section-title">{stack.title}</h2>
              {stack.intro ? (
                <p className="m-section-intro m-projects-intro">
                  {stack.intro}
                </p>
              ) : null}
            </Reveal>
          </div>

          <div className="m-work">
            <div className="m-stack-list">
              {stack.categories.map((category) => (
                <Reveal key={category.name}>
                  <div className="m-stack-card">
                    <p className="m-label">{category.name}</p>
                    <div className="m-stack-tags">
                      {category.items.map((item) => {
                        const tagColor = TAG_COLORS[item] ?? "#3a3936";
                        return (
                          <span
                            key={item}
                            className="m-tag"
                            style={
                              {
                                "--tag-color": tagColor,
                              } as unknown as CSSProperties
                            }
                          >
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
