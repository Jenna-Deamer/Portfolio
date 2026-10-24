import { ArrowDown } from "lucide-react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="text-content">
          <p className="hero-eyebrow">Web Developer at Napoleon</p>

          <h1 id="hero-title">
            <span className="hero-greeting">Hi, I&apos;m</span>
            Jenna Deamer<span className="accent-dot" aria-hidden="true">.</span>
          </h1>

          <p className="hero-lead">
            I work on the website at Napoleon, and build full-stack apps on my
            own time.
          </p>

          <p className="hero-statement">
            At work that means pages, emails and CMS content for
            Napoleon&apos;s fireplace, grill and HVAC businesses, in more than 40
            regions. Outside of work I&apos;m building Money Kiwi, a finance
            tracker I made for myself, and working through The Odin Project.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="cta-button">
              See my work
              <ArrowDown aria-hidden="true" />
            </a>

            <a href="#contact" className="cta-button cta-button--secondary">
              Get in touch
            </a>
          </div>
        </div>

        <div className="image-content">
          <div className="hero-photo-frame">
            <img src="/profile.webp" alt="Portrait of Jenna Deamer" width="270" height="360" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
