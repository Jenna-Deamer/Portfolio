import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Projects.css";
import projectCards from "../data/ProjectData";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-inner">
        <div className="projects-heading">
          <h2>Projects</h2>
        </div>

        <div className="projects-list">
          {projectCards.map((project, index) => (
            <article
              key={project.title}
              className={`project ${index % 2 !== 0 ? "project--reverse" : ""}`}
            >
              <div className="project-image">
                <img
                  src={project.imgSrc}
                  alt={project.imgAlt}
                />
              </div>

              <div className="project-content">
                {project.category && (
                  <p className="project-category">
                    {project.category}
                  </p>
                )}

                <div className="project-heading">
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle">{project.subtitle}</p>
                  )}
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <ul className="project-skills" aria-label="Technologies used">
                  {project.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button"
                    >
                      Live Demo
                      <ExternalLink aria-hidden="true" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button cta-button--secondary"
                    >
                      GitHub
                      <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
