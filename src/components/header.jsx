import React, { useEffect, useRef } from 'react';
import './styles.css';
import logo from './images/header-logo.png';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          
          headerRef.current.classList.remove('animate');
          void headerRef.current.offsetWidth; 
          headerRef.current.classList.add('animate');
        }
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section id="Home" className="banner" ref={headerRef}>
      <div className="banner-details">
        <div className="banner-content">
          <img src={logo} alt="Logo" className="banner-logo" />
        </div>
      </div>
    </section>
  );
};

export default Header;