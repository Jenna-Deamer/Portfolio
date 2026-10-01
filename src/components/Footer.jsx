import { FileText } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="footer-links-wrapper">
                    <a
                        href="https://www.linkedin.com/in/jenna-deamer-51b741251/"
                        className="socialLinkBtn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Jenna Deamer's linkedin"
                    >
                        <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                    </a>
                    <a
                        href="https://github.com/Jenna-Deamer"
                        className="socialLinkBtn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Jenna Deamer's github"
                    >
                        <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                    </a>

                    <a
                        href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Jenna-Deamer-Resume.pdf"
                        className="socialLinkBtn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Jenna Deamer's resume in a new tab as a PDF & download"

                    >
                        <FileText aria-hidden="true" />
                    </a>
                </div>
                <div className="copyright">
                    <small>
                        &copy;{currentYear} Jenna Deamer. All rights reserved.
                    </small>
                </div>
            </footer>
        </>
    )
}

export default Footer;
