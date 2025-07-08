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
                        I'm a web developer at Napoleon, specializing in building landing pages,
                        web forms, and managing multilingual digital content across 40+ regions on Drupal.
                        I recently earned my Interactive Media Design Diploma from Georgian College and continuously expand my skills
                        by exploring new technologies and working on creative projects.
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
