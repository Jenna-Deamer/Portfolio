import { ArrowUpRight, FileText } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="contact" aria-labelledby="contact-title">
            <div className="section-inner">
                <h2 className="section-label" id="contact-title">Contact</h2>

                <p className="contact-lead">
                    Email is the best way to reach me. I&apos;m also on LinkedIn.
                </p>

                <a className="contact-email" href="mailto:JennaDeamer@gmail.com">
                    JennaDeamer@gmail.com
                    <ArrowUpRight aria-hidden="true" />
                </a>

                <ul className="contact-links">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/jenna-deamer-51b741251/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Jenna-Deamer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Jenna-Deamer-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FileText aria-hidden="true" />
                            Resume (PDF)
                        </a>
                    </li>
                </ul>

                <div className="footer-bottom">
                    <small>&copy; {currentYear} Jenna Deamer</small>
                    <a href="#hero" className="back-to-top">Back to top</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
