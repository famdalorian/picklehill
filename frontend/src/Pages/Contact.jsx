import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-icons">
        <a href="tel:+1234567890" aria-label="Phone" className="contact-icon">
          <FaPhone />
          <span>+123 456 7890</span>
        </a>
        <a href="mailto:info@picklehill.com" aria-label="Email" className="contact-icon">
          <FaEnvelope />
          <span>info@picklehill.com</span>
        </a>
        <a href="https://instagram.com/picklehill" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaInstagram />
          <span>@picklehill</span>
        </a>
        <a href="https://x.com/picklehill" aria-label="X.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaTwitter />
          <span>@picklehill</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
