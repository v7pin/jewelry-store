import React from 'react';
import Slider from 'react-slick';

const sliderImages = [
 ' image1.png',
 ' imagenew1.jpg',
 ' imagenew3.png',
];

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {sliderImages.map((img, idx) => (
          <div key={idx} className="flex justify-center items-center">
            
            <img src={img} alt={`Slide ${idx + 1}`} className="max-w-full md:max-w-3/4 lg:max-w-1/2 h-auto " />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSlider;
