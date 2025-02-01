import "../styles/Projects.css";
import projectCards from "../data/ProjectData";

function Projects() {
  const formatSkills = (skills) => {
    const formattedSkills = skills.join(" | ");
    return formattedSkills;
 }


  return (
      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projectCards.map((card, index) => (
            <article key={index} className="projects-card">
              <div className="project-thumbnail">
                <img
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  aria-label={card.AriaLabel}
                />
                <div className="project-title">
                  <h3>{card.title}</h3>
                </div>
              </div>
              <div className="project-text-content">{card.description}</div>
              <div className="card-footer">
                <div className="project-skill">
                  <small>{formatSkills(card.skills)}</small>
                </div>
                <div className="button-container">
                  <a href={card.demoUrl}  target="_blank" rel="noopener noreferrer" className="cta-button">
                    <i className="bi bi-laptop"></i> Demo
                  </a>
                  <a href={card.githubUrl} className="cta-button"  target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i> Github
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

  );
}

export default Projects;
