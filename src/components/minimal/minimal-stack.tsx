import { content } from "@/data/content";
import { Reveal } from "../reveal";

const { stack } = content;

export function MinimalStack() {
  return (
    <section id="stack" className="m-section">
      <div className="m-container">
        <Reveal>
          <h2 className="m-section-title" style={{ marginBottom: "24px" }}>
            {stack.title}
          </h2>
          <div className="m-stack-grid">
            {stack.categories.map((category) => (
              <div key={category.name} className="m-stack-card">
                <p className="m-label">{category.name}</p>
                <div className="m-stack-tags">
                  {category.items.map((item) => (
                    <span key={item} className="m-tag">
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
