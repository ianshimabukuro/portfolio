import type { Metadata } from "next";
import Link from "next/link";
import { getProject, projects } from "../../projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Ian Shimabukuro"
    };
  }

  return {
    title: `${project.title} | Ian Shimabukuro`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Ian Shimabukuro`,
      description: project.summary,
      type: "article"
    },
    twitter: {
      card: "summary",
      title: `${project.title} | Ian Shimabukuro`,
      description: project.summary
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="site-shell project-shell">
        <Link className="back-link" href="/">
          Back home
        </Link>
        <section className="project-hero">
          <p className="eyebrow">Project</p>
          <h1>Project not found</h1>
          <p className="lede">
            This case study is not available. Return home to see selected work.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="site-shell project-shell">
      <Link className="back-link" href="/#work">
        Back to work
      </Link>

      <article>
        <section className="project-hero">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="lede">{project.summary}</p>
          <div className="project-meta" aria-label="Project metadata">
            <span>{project.role}</span>
            <span>{project.period}</span>
          </div>
        </section>

        <section className="content-grid" aria-label="Case study details">
          <div>
            <h2>What mattered</h2>
            {project.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>

          <div className="side-panel">
            <h2>Stack</h2>
            <ul className="tag-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="outcome-block">
          <h2>Selected outcomes</h2>
          <ul className="outcome-list">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
