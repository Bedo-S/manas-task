import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Project MANAS</h2>
          <p>
            Project MANAS is the official AI and Robotics team of MAHE, Manipal, established in 2014. We aim to build India’s first driverless car and have achieved recognition in various competitions.
          </p>
        </div>
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:projectmanas.mit@gmail.com">projectmanas.mit@gmail.com</a></p>
          <p>Phone: <a href="tel:+919108168772">+91 9108168772</a></p>
          <p>Address: Automobile Workshop, Near Kamath Circle, MIT, Manipal, Karnataka 576104</p>
        </div>
        <div className="footer-social">
  <h3>Connect with Us</h3>
  <a href="https://www.facebook.com/projectmanas" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com/projectmanas" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.instagram.com/projectmanas" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.linkedin.com/company/projectmanas" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Project MANAS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
