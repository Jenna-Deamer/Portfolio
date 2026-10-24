import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Projects.css";
import projectCards from "../data/ProjectData";

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <header className="section-head">
          <p className="section-label">Selected work</p>
          <h2 id="projects-title">My Projects</h2>
        </header>

        <div className="projects-list">
          {projectCards.map((project, index) => (
            <article
              key={project.title}
              className={`project ${index % 2 !== 0 ? "project--reverse" : ""}`}
            >
              {/* Clickable for mouse users; keyboard and screen reader users get the buttons below */}
              <a
                className="project-image"
                href={project.demoUrl ?? project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src={project.imgSrc} alt="" loading="lazy" />
              </a>

              <div className="project-content">
                <p className="project-category">{project.category}</p>

                <div className="project-heading">
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle">{project.subtitle}</p>
                  )}
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {project.built && (
                  <div className="project-built">
                    <h4>What I built</h4>
                    <ul>
                      {project.built.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.note && (
                  <p className="project-note">{project.note}</p>
                )}

                <ul className="tag-list" aria-label="Technologies used">
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
                      Live demo
                      <span className="sr-only">of {project.title} (opens in a new tab)</span>
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
                      Code
                      <span className="sr-only">for {project.title} on GitHub (opens in a new tab)</span>
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
