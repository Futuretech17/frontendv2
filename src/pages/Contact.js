// src/pages/ContactPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import LocationMap from '../components/LocationMap';
import heroContactImage from '../assets/images/contact-us.jpg'
import '../styles/Contact.css';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with Twokay Chemicals Ltd."
        backgroundImage={heroContactImage} // Pass the specific image
      />
      
      {/* Unified Contact Section */}
      <section className="contact-section">
        <div className="contact-info-form">
          <div className="contact-info">
            <ContactInfo /> {/* Left section with contact information */}
          </div>
          <div className="divider"></div> {/* Divider between ContactInfo and ContactForm */}
          <div className="contact-form">
            <ContactForm /> {/* Right section with contact form */}
          </div>
        </div>
      </section>
      
      <LocationMap />
      <Footer />
    </>
  );
};

export default ContactPage;
