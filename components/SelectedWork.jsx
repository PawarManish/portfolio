import { projects } from "@/data/projects";
import { profileData } from "@/data/profile";

export default function SelectedWork() {
  const { selectedWork } = profileData;

  return (
    <section className="selected-work-section" aria-label="Selected Work">
      <div className="selected-work-header">
        <h2 className="selected-work-title">{selectedWork.title}</h2>
        <span className="selected-work-period">{selectedWork.period}</span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <span className="project-number">{project.id}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
