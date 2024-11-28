import React from 'react';
import '../styles/CTABanner.css'; // Assuming you have a separate CSS file for styling.

const CTA = () => {
  return (
    <section id="cta-banner" className="cta-banner">
      <div className="cta-content">
        <h2>Get In Touch With Us Today!</h2>
        <p>
          Interested in our products or services? Let us know how we can assist you.
          Our team is ready to provide tailored solutions for your needs.
        </p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </div>
    </section>
  );
};

export default CTA;
