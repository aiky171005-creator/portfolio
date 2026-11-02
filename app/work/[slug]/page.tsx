import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectStory } from "@/components/project-story";
import { SiteNav } from "@/components/site-nav";
import { assetPath, projects } from "@/lib/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const image = new URL(project.thumbnail, origin).toString();
  const title = `${project.title} — Do Sumi`;

  return {
    title,
    description: project.headline,
    openGraph: { title, description: project.headline, images: [{ url: image, alt: project.title }] },
    twitter: { card: "summary_large_image", title, description: project.headline, images: [image] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="case-page" style={{ "--case-accent": project.accent } as CSSProperties}>
      <SiteNav />

      <article>
        <header className="case-intro">
          <div className="case-index">
            <span>{String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title}</h1>
          <div className="case-copy">
            <h2>{project.headline}</h2>
            <p>{project.description}</p>
          </div>
          <dl className="case-meta">
            {project.meta.map((item, index) => (
              <div key={item}>
                <dt>{index === 0 ? "Period" : index === 1 ? "Type" : "Scope"}</dt>
                <dd>{item}</dd>
              </div>
            ))}
          </dl>
          <p className="case-tags">{project.tags.map((tag) => `#${tag}`).join("  ")}</p>
        </header>

        <figure className="case-hero">
          <img src={project.thumbnail} alt={`${project.title} 대표 이미지`} />
        </figure>

        <ProjectStory project={project} />

        <footer className="next-project">
          <span>Next project</span>
          <a href={assetPath(`/work/${next.slug}`)}>
            <strong>{next.title}</strong>
            <span>↗</span>
          </a>
        </footer>
      </article>
    </main>
  );
}
