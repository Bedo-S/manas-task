import React, { useState } from 'react';
import './styles.css';
import logo from './images/logo_header.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#Home" className="nav-link" onClick={toggleMenu}>Home</a>
        </li>
        <li>
          <a href="#About" className="nav-link" onClick={toggleMenu}>About</a>
        </li>
        <li>
          <a href="#Projects" className="nav-link" onClick={toggleMenu}>Projects</a>
        </li>
        <li>
          <a href="https://projectmanas.in/gallery" className="nav-link" onClick={toggleMenu}>Gallery</a>
        </li>
        <li>
          <a href="https://projectmanas.in/team" className="nav-link" onClick={toggleMenu}>Our Team</a>
        </li>
        <li>
          <a href="#Sponsors" className="nav-link" onClick={toggleMenu}>Sponsors</a>
        </li>
        <li>
          <a href="#Contact" className="nav-link contact-button" onClick={toggleMenu}>Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;