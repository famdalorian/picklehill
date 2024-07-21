import React from "react";

const Home = () => {
  return (
    <div className="content">
      <h1>Welcome to PickleHill Ltd</h1>

      <div className="video-container">
        <iframe 
          title="vimeo-player" 
          src="https://player.vimeo.com/video/988106334?h=9544e92f38" 
          width="640" 
          height="360" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
      
      <p>We specialize in crafting exquisite cakes for all occasions.</p>
      <p>
        From elegant wedding cakes to whimsical birthday creations, we create
        confectionery masterpieces that delight both the eyes and the taste
        buds.
      </p>
      <p>
        Explore our gallery to discover our portfolio of delectable creations,
        and contact us to discuss how we can make your special event even
        sweeter.
      </p>
    </div>
  );
};

export default Home;
