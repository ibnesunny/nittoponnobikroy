import React, { useState, useEffect, useRef } from 'react';
import slider1 from './../../../assets/images/banner6.jpeg';
import slider2 from './../../../assets/images/banner2.jpeg';
import slider3 from './../../../assets/images/banner3.jpeg';
import slider4 from './../../../assets/images/banner1.jpeg';
import slider5 from './../../../assets/images/banner5.jpeg';
import slider6 from './../../../assets/images/banner1.jpeg';

const DynamicParallaxCarousel = () => {
  const images = [slider1, slider2, slider3, slider4, slider5, slider6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);
  const hoverTimeout = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const handleMouseEnter = () => {
    stopAutoSlide();
    hoverTimeout.current = setTimeout(() => {
      startAutoSlide();
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="py-10 relative overflow-hidden bg-gradient-to-b from-cyan-50 to-green-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-4xl md:text-5xl text-accent font-bold text-center mb-8">
        Our Success Story
      </h1>

      <div className="relative w-full max-w-6xl mx-auto h-[320px] md:h-[400px] lg:h-[480px]">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          let translateX = 0;
          let scale = 1;
          let opacity = 1;
          let blur = 0;

          if (isActive) {
            translateX = 0;
            scale = 1.05;
            opacity = 1;
            blur = 0;
          } else if (isPrev) {
            translateX = -50;
            scale = 0.95;
            opacity = 0.5;
            blur = 2;
          } else if (isNext) {
            translateX = 50;
            scale = 0.95;
            opacity = 0.5;
            blur = 2;
          } else {
            translateX = 0;
            scale = 0.9;
            opacity = 0;
            blur = 4;
          }

          return (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-lg transition-all duration-1000 ease-in-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity: opacity,
                filter: `blur(${blur}px)`,
                zIndex: isActive ? 30 : 10,
              }}
            />
          );
        })}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-800 p-2 md:p-3 rounded-full shadow-md transition duration-300 z-40"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-800 p-2 md:p-3 rounded-full shadow-md transition duration-300 z-40"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full border-2 border-white transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-accent to-error scale-125'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicParallaxCarousel;
