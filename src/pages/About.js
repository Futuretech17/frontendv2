import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import CompanyOverview from '../components/CompanyOverview';
import MissionVisionValues from '../components/MissionVisionValues';
import ProductsOverview from '../components/ProductsOverview';
// import OurTeam from '../components/OurTeam';
// import Achievements from '../components/Achievements';
import heroAboutImage from '../assets/images/about-us.jpg'; // Adjust path as needed

const AboutPage = () => {
  return (
    <>
      <Navbar /> {/* Include the Navbar here */}
      <HeroSection
        title="About Us"
        subtitle="Learn more about Twokay Chemicals Ltd."
        backgroundImage={heroAboutImage} // Pass the specific image
      />

      {/* Modular Sections */}
      <CompanyOverview />
      <MissionVisionValues />
      <ProductsOverview />
      {/* <OurTeam /> */}
      {/* <Achievements /> */}
      
      <Footer />
    </>
  );
};

export default AboutPage;
