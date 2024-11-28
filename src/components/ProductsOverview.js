// src/components/ProductsOverview.js
import React from 'react';
import '../styles/ProductsOverview.css'

const ProductsOverview = () => (
  <section className="products-overview">
  <h2>Our Products</h2>
  <p className="section-description">
    At Twokay Chemicals, we offer a wide range of high-quality medical products. Whether you're in healthcare or need products for other industries, our collection ensures safety and reliability.
  </p>
  
  <div className="product-categories">
    <div className="product-category">
      <i className="fas fa-syringe"></i> {/* Icon for surgical supplies */}
      <h3>Surgical Supplies</h3>
      <p>Explore a variety of surgical tools and equipment for medical professionals.</p>
      <a href="#surgical" className="category-link">Learn More</a>
    </div>
    
    <div className="product-category">
      <i className="fas fa-cogs"></i> {/* Icon for hospital disposables */}
      <h3>Hospital Disposables</h3>
      <p>Disposable medical products designed for patient care in hospitals.</p>
      <a href="#disposables" className="category-link">Learn More</a>
    </div>
    
    <div className="product-category">
      <i className="fas fa-capsules"></i> {/* Icon for pharmaceuticals */}
      <h3>Pharmaceuticals</h3>
      <p>High-quality pharmaceutical supplies to meet your medical needs.</p>
      <a href="#pharma" className="category-link">Learn More</a>
    </div>

    <div className="product-category">
      <i className="fas fa-heartbeat"></i> {/* Icon for diagnostics */}
      <h3>Diagnostics</h3>
      <p>Reliable diagnostic tools to ensure accurate medical assessments.</p>
      <a href="#diagnostics" className="category-link">Learn More</a>
    </div>
  </div>
</section>


);

export default ProductsOverview;
