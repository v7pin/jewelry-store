import React from 'react';

const testimonials = [
  { 
    quote: 'Absolutely stunning jewelry! Exceeded my expectations in every way.', 
    author: 'Vipin Kumar',
    image: 'people1.jpg', 
  },
  { 
    quote: 'I am in love with my new necklace. It\'s elegant and beautifully crafted.', 
    author: 'Anushka Sen',
    image: 'people2.jpg', 
  },
  { 
    quote: 'The customer service here is exceptional. They helped me find the perfect gift for my wife.', 
    author: 'Disha Sharma',
    image: 'people3.jpg', 
  },
];

function Testimonials() {
  return (
    <section className="testimonials container mx-auto my-12 p-4">
      <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full mr-4" src={testimonial.image} alt={testimonial.author} />
                <div>
                  <p className="text-gray-800 text-lg font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
