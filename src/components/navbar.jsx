import React, { useState, useRef } from 'react';
import './styles.css';
import logo from './images/logo_header.png';
import ContactForm from './contact-us';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contactFormRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.openModal();
    }
    setIsMenuOpen(false); // Close the menu if it's open
  };

  return (
    <>
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
            <button className="nav-link contact-button" onClick={openContactForm}>
              Contact Us
            </button>
          </li>
        </ul>
      </div>
      <ContactForm ref={contactFormRef} />
    </>
  );
};

export default Navbar;