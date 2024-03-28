import React, { useState } from "react";


const products = [
  {
    id: 1,
    category: "Necklaces",
    name: "Elegant Pearl Necklace",
    image: "n1.jpg",
    price: 120.0,
    discount: 10, // In percentage
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

const categories = [...new Set(products.map((product) => product.category))];

function ProductCard({ product }) {
  const discountPrice = (
    product.price -
    (product.price * product.discount) / 100
  ).toFixed(2);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <img
        className="p-8 rounded-t-lg"
        src={product.image}
        alt={product.name}
      />
      <div className="px-5 pb-5">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${discountPrice}
          </span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
        <div className="text-gray-500 mt-2">
          {product.discount > 0 && (
            <>
              <span className="line-through">${product.price}</span>
              <span className="ml-2 text-red-600">{product.discount}% off</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="container mx-auto my-12 p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="flex justify-center mb-8">
        <select
          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
