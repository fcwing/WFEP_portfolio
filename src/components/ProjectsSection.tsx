import Image from "next/image";
import { projects } from "@/data/content";
import SectionHead from "./SectionHead";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <SectionHead
          eyebrow="Creative work"
          title="Projects"
          lead="Hong Kong–inspired creative work under GONG2WAAN4BRO."
        />

        <div className="project-grid reveal">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${index === 3 ? "project-card--wide" : ""}`}
              data-index={index + 1}
              id={project.id}
            >
              <div className="project-card__image-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="project-card__image"
                />
                <div className="project-card__overlay">
                  <span className="project-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.shortDescription}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
