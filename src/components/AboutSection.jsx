import React from 'react';
import backgroundImage from '../assets/abt.png'; 

function AboutSection() {
  return (
    <section
      className="about-section bg-cover bg-center py-12 flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 bg-white bg-opacity-90 rounded-lg shadow-xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center pt-8">About Punjab Jewelers & Fabrics</h2>
        <p className="mt-4 text-center text-gray-600 text-lg px-6 mb-8">
          At Punjab Jewelers & Fabrics, we’re dedicated to bringing you the finest jewelry pieces crafted with precision and care. Our selection is unmatched, and our service is impeccable. Experience the opulence and craftsmanship of our collections.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
