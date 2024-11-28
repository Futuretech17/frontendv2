import React from 'react';
import '../styles/SellingPoints.css';
import 'animate.css'; // Import animate.css for extra animations

const SellingPoints = () => {
    return (
        <section className="selling-points">
            <div className="selling-point animate__animated animate__fadeIn">
                <i className="fas fa-archive"></i> {/* Inventory Management Icon */}
                <h3>Comprehensive Inventory</h3>
                <p>We maintain a vast inventory to ensure quick delivery and availability of all products.</p>
            </div>
            <div className="selling-point animate__animated animate__fadeIn">
                <i className="fas fa-dollar-sign"></i> {/* Pricing Icon */}
                <h3>Affordable Solutions</h3>
                <p>Our pricing is tailored to provide the best value without compromising quality.</p>
            </div>
            <div className="selling-point animate__animated animate__fadeIn">
                <i className="fas fa-check-circle"></i> {/* Experience Icon */}
                <h3>Trusted Expertise</h3>
                <p>With over 30 years in the industry, we bring unparalleled expertise to the table.</p>
            </div>
            <div className="selling-point animate__animated animate__fadeIn">
                <i className="fas fa-thumbs-up"></i> {/* Quality Assurance Icon */}
                <h3>Rigorous Quality Checks</h3>
                <p>All our products undergo stringent quality control to meet industry standards.</p>
            </div>
        </section>
    );
};

export default SellingPoints;
