import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.PNG";
import "../App.css";


const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="logo" className="cakes-logo" />
  Logo
      </div>
      <div className="navbar-menu">
        {/* Hamburger menu icon */}
        <div className="hamburger-menu">&#9776;</div>
        {/* Side menu */}
        <ul className="side-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/specialties">Specialties</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
