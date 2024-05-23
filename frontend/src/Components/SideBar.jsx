import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Gallery" onClick={onClose}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/specialties" onClick={onClose}>
            Our Specialties
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={onClose}>
            Contact
          </Link>
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default Sidebar;
