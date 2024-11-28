// src/components/LocationMap.js
import React from 'react';
import '../styles/LocationMap.css';

const LocationMap = () => {
  return (
    <div className="location-map">
      <h3>Our Location</h3>
      {/* You can embed a Google Map or any other map provider here */}
      <iframe
        title="Location map for Twokay Chemicals ltd"
        width="100%"
        height="400"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.827273910714!2d36.814550874789305!3d-1.2770769356157299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172dbdb4d485%3A0x1f7dea8116fc9186!2sTwokay%20Chemicals%20Ltd.!5e0!3m2!1sen!2ske!4v1690194226288!5m2!1sen!2ske"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationMap;
