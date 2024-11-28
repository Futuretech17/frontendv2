import React from 'react';
import '../styles/Footer.css'; 
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-brandname">Twokay Chemicals Ltd</h2>
          <p className="footer-description">
            We are dedicated to providing top-quality medical supplies and equipment. Our expertise and quality control ensure that you receive only the best.
          </p>
        </div>

        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Product Categories</h3>
          <ul className="footer-links">
            <li>Surgical Supplies</li>
            <li>Hospital Disposables</li>
            <li>Pharma Products</li>
            <li>Diagnostics</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> 48 Kijabe St, Nairobi</li>
            <li><a href="tel:+254714687727"><FaPhone /> +254 714 687727</a></li>
            <li><a href="mailto:twokay@bidii.com"><FaEnvelope /> twokay@bidii.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Twokay Chemicals Ltd | Powered by <a href="javascript:void(0)">Frostfieldtech</a></p>
      </div>
    </footer>
  );
};

export default Footer;
