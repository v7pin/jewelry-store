import React from 'react';
import HeroSlider from './HeroSlider';
import FeaturedProducts from './FeaturedProducts';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import ContactCTA from './ContactCTA';
import SocialMediaChatbot from './SocialMediaChatbot'; 

function Home() {
  return (
    <main>
      <HeroSlider />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <ContactCTA />
      <SocialMediaChatbot /> 
    </main>
  );
}

export default Home;
