import { useEffect, useRef } from "react";
import "../styles/Projects.css";
import projectCards from "../data/ProjectData";

function Projects() {
  const projectsRef = useRef(null);

  const formatSkills = (skills) => {
    const formattedSkills = skills.join(" | ");
    return formattedSkills;
 }

  useEffect(() => {
    // Create an IntersectionObserver to observe when project cards enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the entry is intersecting (visible in the viewport), add class
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger the callback when 10% of the element is visible
    );

    // Select all project cards
    const projectCards = projectsRef.current.querySelectorAll(".projects-card");
    // Observe each project card
    projectCards.forEach((card) => observer.observe(card));

    // Cleanup function to unobserve the project cards when the component unmounts
    return () => {
      projectCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <section id="projects">
        <h2 className="text-center">My Work</h2>
        <div className="projects-container" ref={projectsRef}>
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
                  <a href={card.demoUrl} className="cta-button">
                    <i className="bi bi-laptop"></i> Demo
                  </a>
                  <a href={card.githubUrl} className="cta-button">
                    <i className="bi bi-github"></i> Github
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
