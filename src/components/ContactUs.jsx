import React from 'react';

function ContactUs() {
  return (
    <div className="container mx-auto p-4 my-8">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
     
      <div className="map mb-12 overflow-hidden rounded-lg shadow-lg">
        <iframe
          title="Our Location in Mumbai"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.6561682337!2d72.87739257320018!3d19.075989316504282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63004100001%3A0x3be7c63004100001!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1662044332349!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        
        <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Punjab Jewelers & Fabrics</h2>
          <p className="mb-4">123 Fashion Street, Mumbai, MH 400050</p>
          <p className="mb-4">Email: contact@punjabjewelers.com</p>
          <p className="mb-6">Phone: +91 22 1234 5678</p>
          
          <div className="flex justify-start gap-6 text-3xl">
            <a href="https://facebook.com" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" className="hover:text-pink-400"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl p-8">
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="message">Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your message..."></textarea>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 ease-in-out" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
