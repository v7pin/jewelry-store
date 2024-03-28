import React from 'react';

const featuredProducts = [
  { 
    name: 'Elegant Pearl Necklace', 
    image: 'WhatsApp Image 2024-03-28 at 14.22.40_f6434c43.jpg', 
    description: 'A luxurious pearl necklace to grace your neckline.'
  },
  { 
    name: 'Royal Jewel Set', 
    image: 'WhatsApp Image 2024-03-28 at 14.22.35_d33433c7.jpg', 
    description: 'An exquisite set fit for royalty, featuring intricately designed jewels.'
  },
  { 
    name: 'Golden Elegance', 
    image: 'WhatsApp Image 2024-03-28 at 14.22.36_72debbfa.jpg', 
    description: 'A golden set that redefines elegance.'
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products container mx-auto my-16 p-8 bg-black text-white ">
      <h2 className="text-4xl font-bold text-center mt-3 mb-8 font-afacad">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredProducts.map((product, idx) => (
          <div key={idx} className="product-item transform transition duration-500 hover:scale-105 hover:shadow-lg">
            <div className="overflow-hidden my-10">
              <img src={product.image} alt={product.name} className="h-80 w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110 hover:rounded-3xl " />
            </div>
            <h3 className="text-lg font-bold mt-4 text-center">{product.name}</h3>
            <p className="text-sm text-white text-center">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
