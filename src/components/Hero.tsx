import React from 'react';
import "../styles/Hero.css";
import CanvasBackground from "./CanvasBackground";
function Hero() {
  return (
     <section id="hero" style={{ position: 'relative' }}>
    <CanvasBackground />
   
        <div className="hero-container">
          <div className="image-content">
            <img src="/profile.webp" alt="Image of Jenna Deamer"/>
          </div>
          <div className="text-content">
            <h1>Hello, I&apos;m Jenna&nbsp;Deamer</h1>
            <p className="hero-statement">
              I&apos;m a passionate web developer at Napoleon, where I manage
              Napoleon.com, supporting over 40 countries in multiple languages
              through Drupal. Currently completing my Interactive Media Design
              Diploma at Georgian&nbsp;College, I’m always exploring new technologies
              and working on exciting projects in my spare&nbsp;time.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="cta-button">View Work</a>  
              <a href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Jenna%20Deamer%20Resume.pdf" className="cta-button" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Hero;