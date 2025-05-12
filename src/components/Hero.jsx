import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  
  const slides = [
    {
      image: assets.hero_image,
      tagline: "NATURAL FORMULA",
      title: "Botanical Skincare Elixirs",
      description: "Harnessing nature's power for radiant skin without synthetic additives",
      cta: "SHOP NOW"
    },
    {
      image: assets.hero_image2,
      tagline: "AYURVEDIC WISDOM",
      title: "Ancient Beauty Secrets",
      description: "5000-year-old recipes for balanced, glowing complexion",
      cta: "DISCOVER"
    },
    {
      image: assets.hero_image3,
      tagline: "CLEAN SCIENCE",
      title: "Dermatologist-Approved",
      description: "Clinically effective yet free from harsh irritants",
      cta: "EXPLORE"
    }
  ];

  // Handle the 4-second cycle with 1-second text delay
  useEffect(() => {
    const totalDuration = 4000; // 4 seconds total
    const textDelay = 1000; // Text appears after 1 second
    
    setTextVisible(false);
    
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, textDelay);
    
    const slideTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, totalDuration);
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(slideTimer);
    };
  }, [currentIndex, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 1000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 1000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 1000);
  };

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 bg-fuchsia-50 relative overflow-hidden'>
      {/* Text Content - Animated separately */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 relative'>
        <div className={`max-w-md transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          textVisible 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-10 opacity-0'
        }`}>
          <div className='flex items-center gap-2 mb-2'>
            <span className='w-8 md:w-11 h-[2px] bg-[#414141] transition-all duration-300 delay-100' aria-hidden="true"></span>
            <p className='font-medium text-sm md:text-base tracking-wider transition-all duration-300 delay-75'>
              {slides[currentIndex].tagline}
            </p>
          </div>
          
          <h1 className='prata-regular text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 transition-all duration-500 delay-150'>
            {slides[currentIndex].title}
          </h1>
          
          <p className='text-gray-600 mb-6 transition-all duration-500 delay-200'>
            {slides[currentIndex].description}
          </p>
          
          <div className='flex items-center gap-2 transition-all duration-300 delay-300'>
            <p className='font-semibold text-sm md:text-base hover:text-fuchsia-600 transition-colors cursor-pointer'>
              {slides[currentIndex].cta}
            </p>
            <span className='w-8 md:w-11 h-[1px] bg-[#414141] transition-all duration-300 delay-300' aria-hidden="true"></span>
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <div className='w-full sm:w-1/2 relative overflow-hidden'>
        <div className='relative h-full w-full' style={{ paddingBottom: '75%' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={index !== currentIndex}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-500 z-10'
          aria-label='Previous slide'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-500 z-10'
          aria-label='Next slide'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Indicator Dots */}
        <div className='absolute bottom-6 left-0 right-0 flex justify-center gap-2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-fuchsia-600' : 'w-2 bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;