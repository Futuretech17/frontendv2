import React from 'react';
import '../styles/CompanyOverview.css';
import commitmentImage from '../assets/images/commitment.jpg'; // Ensure this image is optimized

const CompanyOverview = () => {
  return (
    <section className="about-us">
      <h2>Our Journey</h2>
      <p>
        Twokay Chemicals Ltd, established in 1992, has been steadily growing and
        establishing itself as a leading pharmaceutical distributor and wholesale chemist. With a
        commitment to providing high-quality pharmaceutical products, medical equipment, and disposables,
        the company has become a trusted name in the healthcare industry.
      </p>

      <div className="content">
        <div className="text">
          <h3>Our Commitment</h3>
          <p>
            With over 30 years in the industry, we have built strong relationships with healthcare facilities
            and are committed to providing quality medical supplies to improve lives.
          </p>
        </div>
        <div className="image">
          <img src={commitmentImage} alt="Company Overview" loading="lazy" />
        </div>
      </div>

      <div className="highlights">
        <div className="highlight">
          <h3>30+ Years</h3>
          <p>Experience in pharmaceutical distribution</p>
        </div>
        <div className="highlight">
          <h3>500+</h3>
          <p>Healthcare facilities served</p>
        </div>
        <div className="highlight">
          <h3>100+</h3>
          <p>Product categories</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
