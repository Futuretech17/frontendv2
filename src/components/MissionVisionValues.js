// src/components/MissionVisionValues.js
import React from 'react';
import '../styles/MissionVisionValues.css'

const MissionVisionValues = () => (
  <section className="mission-vision">
  <h2>Mission, Vision & Values</h2>
  
  <div className="content">
    <div className="mission">
      <h3>Mission</h3>
      <p>
        At Twokay Chemicals Ltd, our mission is rooted in the belief that business should be conducted with a caring heart. We strive to deliver healthcare solutions with compassion, ensuring that our products positively impact the lives of patients and healthcare professionals alike. Our focus on quality, reliability, and customer satisfaction is driven by a genuine desire to contribute to the well-being of people in Kenya and across the East African region.
      </p>
    </div>
    
    <div className="vision">
      <h3>Vision</h3>
      <p>
        Our vision at Twokay Chemicals Ltd is to lead the way as a front-runner in the supply of medical equipment and disposables in Kenya and throughout the East African region. We aim to be the go-to partner for healthcare providers, offering an extensive and diverse range of medical products that meet the highest standards of quality and safety. As a visionary company, we are committed to advancing healthcare accessibility and affordability for all.
      </p>
    </div>
  </div>
  
  <div className="values">
    <div className="value">
      <i className="fas fa-hand-holding-heart"></i> {/* FontAwesome Icon */}
      <h4>Trust</h4>
      <p>We build long-term relationships based on trust and transparency with our partners and customers.</p>
    </div>
    <div className="value">
      <i className="fas fa-cogs"></i> {/* FontAwesome Icon */}
      <h4>Innovation</h4>
      <p>Constantly pushing the boundaries of medical technology to provide innovative solutions.</p>
    </div>
    <div className="value">
      <i className="fas fa-users"></i> {/* FontAwesome Icon */}
      <h4>Customer Satisfaction</h4>
      <p>Ensuring that every customer receives the best quality products and service, every time.</p>
    </div>
  </div>
</section>


);

export default MissionVisionValues;
