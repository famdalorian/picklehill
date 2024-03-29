import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import cake1 from "../src/Assets/cake1.jpeg";
import cake2 from "../src/Assets/cake2.jpeg";
import Sidebar from "./Components/SideBar";
import Home from "./Pages/Home";
import Specialties from "./Components/Specialties";

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
            <button className="toggle-button" onClick={toggleSidebar}>
              <img src={logo} alt="Logo" className="logo" />
            </button>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specialties" element={<Specialties />} />
          </Routes>
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
