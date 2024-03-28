import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <nav className="bg-black p-4 text-gold-500">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src="logo.png" alt="Punjab Jewelers & Fabrics" className="h-16 w-auto" />
          </Link>
          <div className="flex">
            <Link to="/" className="px-4 text-gold-500 hover:text-gold-300">Home</Link>
            <Link to="/about" className="px-4 text-gold-500 hover:text-gold-300">About Us</Link>
            <Link to="/products" className="px-4 text-gold-500 hover:text-gold-300">Products</Link>
            <Link to="/gallery" className="px-4 text-gold-500 hover:text-gold-300">Gallery</Link>
            <Link to="/contact" className="px-4 text-gold-500 hover:text-gold-300">Contact Us</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
