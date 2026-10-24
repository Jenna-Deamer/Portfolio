import { ExternalLink } from "lucide-react";
import "../styles/Experience.css";
import experience from "../data/ExperienceData";

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="section-inner">
        <header className="section-head">
          <p className="section-label">Experience</p>
          <h2 id="experience-title">Where I&apos;ve been</h2>
        </header>

        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline-item" key={item.org}>
              <div className="timeline-meta">
                <p className="timeline-dates">{item.dates}</p>
                {item.location && <p className="timeline-location">{item.location}</p>}
              </div>

              <div className="timeline-body">
                <h3>
                  {item.role}
                  <span className="timeline-org"> at {item.org}</span>
                </h3>
                <p className="timeline-summary">{item.summary}</p>
                {item.points && (
                  <ul className="timeline-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.work && (
                  <div className="timeline-work">
                    <h4>Live pages</h4>
                    <ul>
                      {item.work.map((page) => (
                        <li key={page.url}>
                          <a href={page.url} target="_blank" rel="noopener noreferrer">
                            {page.title}
                            <span className="sr-only"> (opens in a new tab)</span>
                            <ExternalLink aria-hidden="true" />
                          </a>
                          <span className="timeline-work-type">{page.type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.tags && (
                  <ul className="tag-list" aria-label="Tools used">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
