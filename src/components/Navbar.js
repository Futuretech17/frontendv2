// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/twokaylogo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
      setMenuOpen(!menuOpen);
  };

  return (
      <nav className="navbar">
          <div className="navbar-container">
              <div className="navbar-brand">
                  <Link to="/" className="brand-link">
                      <img src={logo} alt="Company Logo" className="brand-logo" />
                      <span className="brand-name">Twokay Chemicals Ltd</span>
                  </Link>
              </div>
              <div className="navbar-toggle" onClick={toggleNavbar}>
                  {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
              </div>
              <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                  <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
                  <li><Link to="/about" onClick={toggleNavbar}>About</Link></li>
                  <li><Link to="/products" onClick={toggleNavbar}>Products</Link></li>
                  <li><Link to="/contact" onClick={toggleNavbar}>Contact Us</Link></li>
              </ul>
          </div>
      </nav>
  );
}

export default Navbar;
