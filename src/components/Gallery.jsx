import React from 'react';
import { useSpring, animated } from 'react-spring';

const products = [
  {
    id: 1,
    category: "Necklaces",
    name: "Elegant Pearl Necklace",
    image: "n1.jpg",
    price: 120.0,
    discount: 10, 
  },
  {
    id: 2,
    category: "Earrings",
    name: "Traditional Jhumkas",
    image: "e1.jpg",
    price: 85.0,
    discount: 5,
  },
  {
    id: 3,
    category: "Bracelets",
    name: "Golden Charm Bracelet",
    image: "b1.jpg",
    price: 60.0,
    discount: 15,
  },
  {
    id: 4,
    category: "Rings",
    name: "Diamond Solitaire Ring",
    image: "r1.jpg",
    price: 250.0,
    discount: 20,
  },
  {
    id: 5,
    category: "Necklaces",
    name: "Ruby & Diamond Necklace",
    image: "n2.jpg",
    price: 300.0,
    discount: 12,
  },
  {
    id: 6,
    category: "Necklaces",
    name: "Emerald Kadas",
    image: "n3.jpg",
    price: 150.0,
    discount: 8,
  },
  {
    id: 7,
    category: "Earrings",
    name: "Pearl Drop Earrings",
    image: "e2.jpg",
    price: 45.0,
    discount: 10,
  },
  {
    id: 8,
    category: "Pendants",
    name: "Sapphire Pendant",
    image: "p1.jpg",
    price: 75.0,
    discount: 5,
  },
  {
    id: 9,
    category: "Rings",
    name: "Platinum Band",
    image: "r2.jpg",
    price: 200.0,
    discount: 20,
  },
  {
    id: 10,
    category: "Necklaces",
    name: "Silver Link Chain",
    image: "n4.jpg",
    price: 100.0,
    discount: 10,
  },
  {
    id: 11,
    category: "Necklaces",
    name: "Gold Plated Necklace",
    image: "n6.jpg",
    price: 80.0,
    discount: 10,
  },
  {
    id: 12,
    category: "Rings",
    name: "Diamond Ring",
    image: "e3.jpg",
    price: 350.0,
    discount: 15,
  },
  {
    id: 13,
    category: "Earrings",
    name: "Cushion Earrings",
    image: "e3.jpg",
    price: 40.0,
    discount: 10,
  },  
  {
    id: 14,
    category: "Pendants",
    name: "Cushion Pendants",
    image: "p2.jpg",
    price: 60.0,
    discount: 10,
  },
  {
    id: 15,
    category: "Bracelets",
    name: "Cushion Bracelet",
    image: "b1.jpg",
    price: 70.0,
    discount: 10,
  },

];

function GalleryItem({ src, alt, title }) {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn} className="flex flex-col items-center mb-8 px-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
      <div className="bg-white shadow-lg overflow-hidden rounded-lg">
        <img src={src} alt={alt} className="object-cover h-48 w-full" />
        <div className="p-4">
          <p className="text-center font-semibold">{title}</p>
        </div>
      </div>
    </animated.div>
  );
}

function Gallery() {
  return (
    <div className="container mx-auto my-8 p-4">
      <div className="flex flex-wrap -mx-4 justify-center">
        {products.map((product, index) => (
          <GalleryItem key={index} src={product.image} alt={product.name} title={product.name} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;