import React, { useEffect } from 'react';
import '../App.css';
import ImageCarousel from '../Components/ImageCarousel';

const images = new Array(33).fill('https://via.placeholder.com/800x400');

function Gallery() {
  useEffect(() => {
    const images = document.querySelectorAll('.gallery-grid img');

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const dx = clientX - (rect.left + rect.width / 2);
        const dy = clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200; // Maximum distance for the effect
        const moveDist = Math.min(maxDist / dist, 1) * 20; // Adjust the '20' to control the distance of movement
        if (!img.classList.contains('hovered')) {
          img.style.transform = `translate(${dx / dist * moveDist}px, ${dy / dist * moveDist}px)`;
        }
      });
    };

    const handleMouseOver = (event) => {
      const hoveredImg = event.target;
      hoveredImg.classList.add('hovered');
      hoveredImg.style.zIndex = 10;
      hoveredImg.style.transform = 'scale(2)';
    };

    const handleMouseOut = (event) => {
      const hoveredImg = event.target;
      hoveredImg.classList.remove('hovered');
      hoveredImg.style.zIndex = 1;
      hoveredImg.style.transform = '';
    };

    images.forEach((img) => {
      img.addEventListener('mouseover', handleMouseOver);
      img.addEventListener('mouseout', handleMouseOut);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      images.forEach((img) => {
        img.removeEventListener('mouseover', handleMouseOver);
        img.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <ImageCarousel images={images.slice(0, 3)} />
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Grid ${index}`} className="floating-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
