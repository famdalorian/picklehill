import React, { useEffect } from 'react';
import '../App.css';
import ImageCarousel from '../Components/ImageCarousel';

// Manually create an array of image paths
const imagePaths = [
  require('../Assets/gallery/cake1.jpg'),
  require('../Assets/gallery/cake2.jpg'),
  require('../Assets/gallery/cake3.jpg'),
  require('../Assets/gallery/cake4.jpg'),
  require('../Assets/gallery/cake5.jpg'),
  require('../Assets/gallery/cake6.jpg'),
  require('../Assets/gallery/cake7.jpg'),
  require('../Assets/gallery/cake8.jpg'),
  require('../Assets/gallery/cake9.jpg'),
  require('../Assets/gallery/cake10.jpg'),
  require('../Assets/gallery/cake11.jpg'),
  require('../Assets/gallery/cake12.jpg'),
  require('../Assets/gallery/cake13.jpg'),
  require('../Assets/gallery/cake14.jpg'),
  require('../Assets/gallery/cake15.jpg'),
  require('../Assets/gallery/cake16.jpg'),
  require('../Assets/gallery/cake17.jpg'),
  require('../Assets/gallery/cake18.jpg'),
  require('../Assets/gallery/cake19.jpg'),
  require('../Assets/gallery/cake20.jpg'),
  require('../Assets/gallery/cake21.jpg'),
  require('../Assets/gallery/cake22.jpg'),
  require('../Assets/gallery/cake23.jpg'),
  require('../Assets/gallery/cake24.jpg'),
  require('../Assets/gallery/cake25.jpg'),
  require('../Assets/gallery/cake26.jpg'),
  require('../Assets/gallery/cake27.jpg'),
  require('../Assets/gallery/cake28.jpg'),
  require('../Assets/gallery/cake29.jpg'),
  require('../Assets/gallery/cake30.jpg'),
  require('../Assets/gallery/cake31.jpg'),
  require('../Assets/gallery/cake32.jpg'),
  require('../Assets/gallery/cake33.jpg')
];

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
      <ImageCarousel images={imagePaths.slice(0, 33)} />
      <div className="gallery-grid">
        {imagePaths.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Grid ${index}`} className="floating-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
