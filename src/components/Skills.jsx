import "../styles/Skills.css";
import SkillCards from "../data/SkillData";

function Skills (){
    return(
        <>
       <section id="skills">
                <div className="skills-container">
                    {SkillCards.map((skill, index) => (
                        <article key={index} className="skill-card">
                            <img src={skill.image} alt={skill.title} className="skill-image" />
                            <h3 className="skill-title">{skill.title}</h3>
                            <p className="skill-description">{skill.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Skills;