// src/components/Achievements.js
import React from 'react';
import '../styles/Achievements.css'

const Achievements = () => (
  <section className="achievements">
  <h2>Our Achievements</h2>
  <div className="achievements-container">
    <div className="achievement">
      <i className="fas fa-trophy"></i>
      <h3>ISO Certification</h3>
      <p>We have received the ISO 9001:2015 certification for quality management systems.</p>
    </div>

    <div className="achievement">
      <i className="fas fa-shield-alt"></i>
      <h3>Industry Leader</h3>
      <p>Recognized as a leader in providing high-quality medical supplies across East Africa.</p>
    </div>

    <div className="achievement">
      <i className="fas fa-medal"></i>
      <h3>Excellence in Service</h3>
      <p>Awarded for outstanding customer service and efficient supply chain management.</p>
    </div>

    <div className="achievement">
      <i className="fas fa-certificate"></i>
      <h3>Customer Satisfaction</h3>
      <p>Achieved a 95% customer satisfaction rate in annual surveys.</p>
    </div>
  </div>
</section>

);

export default Achievements;
