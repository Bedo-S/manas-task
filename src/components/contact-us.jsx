import React from 'react';
import './styles.css';

function ContactForm() {
  return (
    <section id="Contact" className="contact-section">
      <div className="section-header animate-fade-in">Contact Us</div>
      <form className="contact-form animate-slide-in-left">
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5"></textarea>

        <button type="submit" className="contact-button">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;