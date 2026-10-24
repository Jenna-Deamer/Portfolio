import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Nav.css";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main">
      <a className="navbar-brand" href="#hero">
        <img src="/logo.png" alt="Jenna Deamer, back to top" height="48" width="48" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <ul
        className={`navbar-links${isOpen ? " is-open" : ""}`}
        id="primary-navigation"
      >
        {links.map((link) => (
          <li className="nav-item" key={link.href}>
            <a className="nav-link" href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <a
            className="cta-button cta-button--secondary nav-resume"
            href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Jenna-Deamer-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
