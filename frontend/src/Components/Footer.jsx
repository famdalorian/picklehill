import React, { useEffect } from 'react';
import '../App.css';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    let timeoutId;
    const footer = document.querySelector('.footer');

    const showFooter = () => {
      footer.classList.remove('footer-hidden');
    };

    const hideFooter = () => {
      footer.classList.add('footer-hidden');
    };

    const handleScroll = () => {
      clearTimeout(timeoutId);
      hideFooter();
      timeoutId = setTimeout(showFooter, 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="footer footer-hidden">
      <div className="footer-content">
        <div>Pickle Hill LTD</div>
        <div className="footer-icons">
          <a href="tel:+1234567890" aria-label="Phone">
            <FaPhone />
          </a>
          <a href="mailto:info@picklehill.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/picklehill" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
