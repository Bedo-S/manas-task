import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

const ContactForm = forwardRef((_, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      {isModalOpen && (
        <motion.div
          className="modal-overlay"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h2>Contact Us</h2>
              <button className="close-modal-button" onClick={closeModal}>
                &times;
              </button>
            </div>
            <form className="contact-form">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5"></textarea>

              <button type="submit" className="contact-button">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
});

export default ContactForm;