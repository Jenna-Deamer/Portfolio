import React from "react";
import "../styles/Hero.css";
import CanvasBackground from "./CanvasBackground";
function Hero() {
  return (
    <section id="hero" style={{ position: "relative" }}>
      <CanvasBackground />

      <div className="hero-container">
        <div className="image-content">
          <img src="/profile.webp" alt="Image of Jenna Deamer" />
        </div>
        <div className="text-content">
          <h1>Hi, I&apos;m Jenna&nbsp;Deamer</h1>
          <p className="hero-statement">
            I'm a passionate web developer at Napoleon, where I build landing
            pages, develop web forms, manage digital content, and support email
            communications across Napoleon.com for more than 40 regions through
            Drupal. I recently completed my Interactive Media Design Diploma at
            Georgian College and continually explore new technologies and
            creative projects to grow my skills.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="cta-button">
              View Work
            </a>
            <a
              href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Jenna%20Deamer%20Resume.pdf"
              className="cta-button"
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
