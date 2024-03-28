import React from 'react';
import aboutBackground from '../assets/abt.jpg'; 

function AboutUs() {
  return (
    <div className="relative min-h-screen flex items-center">
      <img src={aboutBackground} alt="About Us Background" className="absolute inset-0 object-cover w-full h-full" />
      <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded p-8 lg:p-16">
        <h1 className="text-4xl font-extrabold text-gray-900 font-">About Punjab Jewelers & Fabrics</h1>
        <p className="mt-4 text-lg text-gray-700 font-onest">
          We are a premium Jewellery Store that has been serving our customers for over a decade. 
          With a focus on craftsmanship and design, we aim to bring you the most exquisite jewellery pieces.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
