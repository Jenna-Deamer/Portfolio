import { ArrowRight } from "lucide-react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="image-content">
          <div className="hero-photo-frame">
            <img src="/profile.webp" alt="Jenna Deamer" />
          </div>
        </div>

        <div className="text-content">
          <h1>
            Hi, I&apos;m
            <br />
            <span className="accent-text">Jenna Deamer</span>
          </h1>

          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Web Developer at Napoleon
          </p>

          <p className="hero-lead">
            I build practical, full-stack web experiences that solve real business problems.
          </p>

          <p className="hero-statement">
            At Napoleon, I build and maintain multilingual web experiences across 40+ regions,
            including landing pages, forms, and CMS-driven content. Outside of work, I continue
            growing my full-stack skills through independent projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="cta-button">
              View Projects
              <ArrowRight aria-hidden="true" />
            </a>

            <a
              href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Jenna-Deamer-Resume.pdf"
              className="cta-button cta-button--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
