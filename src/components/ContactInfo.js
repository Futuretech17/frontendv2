// src/components/ContactInfo.js
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Added FaClock for working hours icon
import '../styles/ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h2>Contact Information</h2>
      
      {/* Phone Information */}
      <div className="contact-info-item">
        <FaPhoneAlt className="contact-icon" />
        <div className='contact-info-description'>
          <p><strong>Phone:</strong></p>
          <p>+254 714 687727</p>
        </div>
      </div>

      {/* Email Information */}
      <div className="contact-info-item">
        <FaEnvelope className="contact-icon" />
        <div className='contact-info-description'>
          <p><strong>Email:</strong></p>
          <p>twokay@bidii.com</p>
        </div>
      </div>

      {/* Address Information */}
      <div className="contact-info-item">
        <FaMapMarkerAlt className="contact-icon" />
        <div className='contact-info-description'>
          <p><strong>Address:</strong></p>
          <p>Twokay Chemicals Ltd, Nairobi, Kenya</p>
        </div>
      </div>

      {/* Working Hours */}
      <div className="contact-info-item">
        <FaClock className="contact-icon" />
        <div className='contact-info-description'>
          <p><strong>Working Hours:</strong></p>
          <ul>
            <li>Mon - Fri: 8:30 am - 5:00 pm</li>
            <li>Saturday: 8:30 am - 1:00 pm</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default ContactInfo;
