import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure the CSS is correctly imported
import BubbleParticles from "./BubbleParticles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="logoContainer">
          <Link
            to="/"
            className="link"
            style={{
              display: "flex",
            }}
          >
            <img
              src="/img/bubble-image.png"
              alt="Bubble Computing"
              className="logo"
            />
            <span className="logo-title">Bubble Computing</span>
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <Link to="/people" className="link">
            People
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="hamburger" onClick={handleMenuToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Full-Screen Menu */}
      {menuOpen && (
        <div className="full-screen-menu">
          <button className="close-button" onClick={closeMenu}>
            &times;
          </button>
          <Link to="/about" className="menu-link" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="menu-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/people" className="menu-link" onClick={closeMenu}>
            People
          </Link>
          <BubbleParticles />
        </div>
      )}
    </>
  );
};

export default Navbar;
