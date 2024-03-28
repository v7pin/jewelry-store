import React from 'react';
import { Link } from 'react-router-dom';

function ContactCTA() {
  return (
    <section className="contact-cta bg-black text-gold-500 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="mt-4">Have any questions? Reach out to us and let's talk about how we can help you.</p>
        <Link to="/contact" className="mt-8 inline-block bg-gold-500 text-black py-2 px-4 rounded hover:bg-gold-300">Contact Us</Link>
      </div>
    </section>
  );
}

export default ContactCTA;
