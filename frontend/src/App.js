import React from "react";
import "./App.css";
import ParallaxComponent from "./Components/Parallax";
import cake1 from "../src/Assets/cake1.jpeg";
import cake2 from "../src/Assets/cake2.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Parallax">
          <ParallaxComponent offsetY={100}>
            <div className="parallax-content">
              <h1>Welcome to PickleHill Ltd</h1>
              <p>
                We specialize in crafting exquisite cakes for all occasions.
              </p>
              <p>
                From elegant wedding cakes to whimsical birthday creations, we
                create confectionery masterpieces that delight both the eyes and
                the taste buds.
              </p>
              <p>
                Explore our gallery to discover our portfolio of delectable
                creations, and contact us to discuss how we can make your
                special event even sweeter.
              </p>
            </div>
          </ParallaxComponent>
        </div>

        <div className="Parallax">
          <ParallaxComponent>
            <div className="parallax-content">
              {/* Use the imported image directly */}
              <img src={cake1} alt="Cake 1" className="parallax-image" />
            </div>
          </ParallaxComponent>
        </div>

        <div className="Parallax">
          <ParallaxComponent offsetY={-50}>
            <div className="parallax-content">
              <h2>Our Specialties</h2>
              <p>
                Indulge in our delicious cakes, made with the finest ingredients
                and attention to detail.
              </p>
              <p>
                From classic flavors like chocolate and vanilla to unique
                creations like red velvet and matcha, we offer something to
                satisfy every palate.
              </p>
              <p>
                Each cake is meticulously decorated to suit your event, ensuring
                a stunning centerpiece that tastes as good as it looks.
              </p>
            </div>
          </ParallaxComponent>
        </div>

        <div className="Parallax">
          <ParallaxComponent>
            <div className="parallax-content">
              {/* Use the imported image directly */}
              <img src={cake2} alt="Cake 2" className="parallax-image" />
            </div>
          </ParallaxComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
