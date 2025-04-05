import React from 'react';
import './styles.css';

const About = () => {
  return (
    <section id="About" className="about">
      <div className="section-header animate-fade-in">About Us</div>
      <div className="about-content-wrapper">
        <div className="about-content animate-slide-in-left">
          <div className="about-content-header">Who Are We?</div>
          <div className="about-content-body">
            Project MANAS is the official AI and Robotics team of MAHE, Manipal
            established in 2014. We are the Grand Prize winners and won the
            Lescoe Cup at the Intelligent Ground Vehicle Competition which is
            held at Michigan. Our aim is to build India’s first driverless car
            and are among the top 13 participants in the Mahindra’s Rise Prize
            challenge.
          </div>
        </div>
        <div className="about-video animate-slide-in-right">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/htGCLnfPwyk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
