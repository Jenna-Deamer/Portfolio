import "../styles/Projects.css";
import projectCards from "../data/ProjectData";
function Projects() {
  return (
    <>
      <section id="projects">
        <h2 className="text-center">My Work</h2>

        <section className="projects-container">
          {projectCards.map((card, index) => (
            <article key={index} className="projects-card">
              <div className="project-thumbnail">
                <img
                  src= {card.imgSrc}
                  alt= {card.imgAlt}
                  aria-label= {card.AriaLabel}
                />
                <div className="project-title">
                  <h3>{card.title}</h3>
                </div>
              </div>
              <div className="project-text-content">
               {card.description}
              </div>
              <div className="button-container">
                <a href={card.demoUrl} className="cta-button"><i className="bi bi-laptop"></i> Demo</a>
                <a href={card.githubUrl} className="cta-button"><i className="bi bi-github"></i> Github</a>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}

export default Projects;
