import { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#hero">
        <img src="/logo.png" alt="A orange circle with the Initials JD in white" height="58" />
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
        className={`navbar-links ${isOpen ? " is-open" : ""}`}
        id="primary-navigation"
      >
        <li className="nav-item">
          <a className="nav-link" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="experience" onClick={() => setIsOpen(false)}>Experience</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
