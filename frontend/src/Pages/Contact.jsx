import React from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-icons">
        <a href="tel:+44 7964543278" aria-label="Phone" className="contact-icon">
          <FaPhone />
          <span>+44 7964543278</span>
        </a>
        <a href="mailto:contact@picklehill.com" aria-label="Email" className="contact-icon">
          <FaEnvelope />
          <span>contact@picklehill.com</span>
        </a>
        <a href="https://instagram.com/pickle.hill.ltd" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaInstagram />
          <span>@picklehill</span>
        </a>
        <a href="https://x.com/picklehill" aria-label="X.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaTwitter />
          <span>@picklehill</span>
          </a>
        <a href="https://www.tiktok.com/@picklehillltd?_t=8oDQDpnaGKu&_r=1" aria-label="tiktok.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaTiktok />
          <span>@picklehillLtd</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
