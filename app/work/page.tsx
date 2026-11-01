import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { assetPath, projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <main className="work-page">
      <SiteNav />
      <header className="work-heading">
        <p>Selected Projects</p>
        <h1>Work</h1>
        <span>2020—2026</span>
      </header>

      <section className="work-grid" aria-label="프로젝트 목록">
        {projects.map((project, index) => (
          <Link className="work-card" href={assetPath(`/work/${project.slug}`)} key={project.slug}>
            <div className="work-card-image">
              <img src={project.thumbnail} alt="" loading={index < 2 ? "eager" : "lazy"} />
              <div className="work-card-overlay">
                <span className="work-card-kicker">Project {String(index + 1).padStart(2, "0")} · {project.year}</span>
                <h2>{project.title}</h2>
                <h3>{project.headline}</h3>
                <p>{project.description}</p>
                <span className="work-card-tags">{project.tags.map((tag) => `#${tag}`).join("  ")}</span>
                <em>View project ↗</em>
              </div>
            </div>
            <footer>
              <div>
                <strong>{project.title}</strong>
                <p>{project.headline}</p>
              </div>
              <span>{project.year}</span>
            </footer>
          </Link>
        ))}
      </section>
    </main>
  );
}
