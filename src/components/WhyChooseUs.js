import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
    const leftRef = useRef(null); // Create a ref for the left section

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in'); // Add fade-in class
                } else {
                    entry.target.classList.remove('fade-in'); // Remove fade-in class when not in view
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        const currentRef = leftRef.current; // Store the current ref in a variable
        if (currentRef) {
            observer.observe(currentRef); // Start observing the left section
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Clean up the observer
            }
        };
    }, []);

    return (
        <div className="why-choose-us">
            <div ref={leftRef} className="why-left">
                <h2>Why Choose Us</h2>
                <p className="why-description">
                    As a premier supplier of surgical and pharmaceuticals supplies in the region, Twokay Chemicals Ltd. is your ultimate source for healthcare solutions. We have decades of experience and operations across the country, enabling us to provide reliable and high-quality healthcare solutions.
                </p>
                <Link to="/about" className="learn-more-button">Learn More</Link>
            </div>
            <div className="why-right">
                <div className="why-points-column">
                    <div className="why-point">
                        <div className="icon">🏆</div>
                        <h3>30+ Years</h3>
                        <p>Over three decades of industry experience.</p>
                    </div>
                    <div className="why-point">
                        <div className="icon">📈</div>
                        <h3>2,000+ Clients</h3>
                        <p>Serving clients countrywide with dedication.</p>
                    </div>
                </div>
                <div className="why-points-column2">
                    <div className="why-point">
                        <div className="icon">🤝</div>
                        <h3>Dedicated workforce</h3>
                        <p>Professional team committed to quality.</p>
                    </div>
                    <div className="why-point">
                <div className="icon">📍</div> {/* A location pin icon to signify nationwide presence */}
                    <h3>Nationwide Presence</h3>
                    <p>Extensive operations across the country for better accessibility.</p>
                </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
