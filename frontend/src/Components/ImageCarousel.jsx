import React, { useState } from 'react';
import '../App.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev-button" onClick={prevImage}>
        &lt;
      </button>
      <div className="carousel-image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image floating-image" />
      </div>
      <button className="carousel-button next-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
