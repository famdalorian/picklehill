// App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import "./App.css";

import Sidebar from "./Components/SideBar";
import Home from "./Pages/Home";
import Specialities from "./Components/Specialities";
import HamburgerIcon from "./Components/HamburgerIcon"; 
import Gallery from "./Pages/Gallery";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
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
            <div className="hamburger-container">
              <HamburgerIcon onClick={toggleSidebar} isOpen={isSidebarOpen} /> 
            </div>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="content-container">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/specialities" element={<Specialities />} />
    <Route path="/Gallery" element={<Gallery />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
</div>
         
          
        </div>
        <div/>
      </div>
      <Footer/>

    </Router>
  );
}

export default App;
