import React from 'react';
import "../styles/Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-links-wrapper">
                <a
          href="https://www.linkedin.com/in/jenna-deamer-51b741251/"
          className="me-4 socialLinkBtn border-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Jenna Deamer's linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/Jenna-Deamer"
          className="socialLinkBtn border-0 me-4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Jenna Deamer's github"
        >
          <i className="bi bi-github"></i>
        </a>

        <a
          href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Jenna%20Deamer%20Resume.pdf"
          className="socialLinkBtn border-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Jenna Deamer's resume in a new tab as a PDF & download"
         
        >
          <i className="bi bi-file-earmark-text-fill"></i>
        </a>
                </div>
                <div className="copyright">
        <small>
          &copy;2025 Jenna Deamer. All rights reserved.
        </small>
      </div>
            </footer>
        </>
    )
}

export default Footer;