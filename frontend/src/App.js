// App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import cake1 from "../src/Assets/cake1.jpeg";
import cake2 from "../src/Assets/cake2.jpeg";
import Sidebar from "./Components/SideBar";
import Home from "./Pages/Home";
import Specialties from "./Components/Specialties";
import HamburgerIcon from "./Components/HamburgerIcon"; // Import the HamburgerIcon component

// Assuming you have a logo image named "logo.png" in the Assets folder
import logo from "../src/Assets/Logo.PNG";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className="content-container">
          <div className="header">
            <div className="hamburger-container"> {/* Add this container for hamburger icon */}
              <HamburgerIcon onClick={toggleSidebar} isOpen={isSidebarOpen} /> {/* Use the HamburgerIcon component */}
            </div>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="content-container">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/specialties" element={<Specialties />} />
  </Routes>
</div>
          <div className="section">
            <div className="content">
              <img src={cake1} alt="Cake 1" className="cake-image" />
            </div>
          </div>
          <div className="section">
            <div className="content">
              <img src={cake2} alt="Cake 2" className="cake-image" />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
