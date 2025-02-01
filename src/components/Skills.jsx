import "../styles/Skills.css";
import SkillCards from "../data/SkillData";

function Skills() {
    return (
        <section id="skills">
            <h2>Technical Expertise</h2>
           
                <div className="skills-container">
                    {SkillCards.map((card, index) => (
                        <article key={index} className="skill-card">
                            <div className="icon">
                                {card.icon}
                            </div>
                            <h3 className="skill-title">{card.title}</h3>
                            <p className="skill-description">{card.description}</p>
                        </article>
                    ))}
                </div>
       
        </section>

    )
}

export default Skills;