import { content } from "@/data/content";
import { Reveal } from "./reveal";

const { blog } = content;

export function Blog() {
  return (
    <section id="blog" className="m-section" data-spy="blog">
      <div className="m-container">
        <Reveal>
          <div className="m-about-card">
            <div className="m-field">
              <span className="m-label">{blog.sectionLabel}</span>
              <h2 className="m-section-title">{blog.title}</h2>
            </div>
            <div className="m-field">
              <span className="m-field-value m-field-lines">{blog.desc}</span>
            </div>
            <div className="m-field">
              <div className="flex flex-wrap gap-1.5">
                {blog.categories.map((category) => (
                  <a
                    key={category.label}
                    href={category.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-chip"
                  >
                    {category.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
