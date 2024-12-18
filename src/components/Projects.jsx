import "../styles/Projects.css";

function Projects() {
  return (
    <>
      <section id="projects">
        <h2 className="text-center">My Work</h2>

        <section className="projects-container">
          <article className="projects-card">
            <div className="project-thumbnail">
              <img
                src="../../public/thumbnails/SmartBeachThumbnail.webp"
                alt="Smart Beach Thumbnail"
              />
              <div className="project-title">
                <h3>Smart Beach</h3>
              </div>
            </div>
            <div className="text-content">
              Smart Beach was a group project dedicated to enhancing safety at
              Station Beach in Kincardine, Ontario. Leveraging machine learning
              models and APIs developed by students specializing in Machine
              Learning and Big Data at Georgian College, our team crafted a
              predictive-based solution accessible through a user-friendly app
              interface. By integrating real-time data on water and weather
              conditions, our solution empowers beach visitors with critical
              insights for a safer, more enjoyable experience.
            </div>
            <div className="button-container">
              <a href="#" className="cta-button">Demo</a>
              <a href="#" className="cta-button">Github</a>
            </div>
          </article>
          <article className="projects-card">
            <div className="project-thumbnail">
              <img
                src="../../public/thumbnails/SmartBeachThumbnail.webp"
                alt="Smart Beach Thumbnail"
              />
              <div className="project-title">
                <h3>Smart Beach</h3>
              </div>
            </div>
            <div className="text-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nisi
              iusto dolore sequi eius aut eligendi similique officia
              perspiciatis? Modi doloremque eius odio quidem pariatur porro
              nihil molestias incidunt delectus!
            </div>
            <div className="button-container">
              <a href="#" className="cta-button">Demo</a>
              <a href="#" className="cta-button">Github</a>
            </div>
          </article>
  
        </section>
      </section>
    </>
  );
}

export default Projects;
