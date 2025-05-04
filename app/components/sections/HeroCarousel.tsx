'use client'
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const images = [
    '/category8.jpeg',
    '/category2.jpeg',
    '/category3.jpeg'
  ];
  
  // Create extended array with clones for infinite effect
  const extendedImages = [...images, images[0]];

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % extendedImages.length);
  }, [extendedImages.length]);

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + extendedImages.length) % extendedImages.length);
  };

  // Handle transition end for infinite reset
  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides Container */}
      <div
        className={`flex ${
          isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''
        }`}
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${extendedImages.length * 100}%`
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((src, index) => (
      <div
      key={index}
      className="relative w-full h-[80vh] bg-pink-300 flex-shrink-0"
    >
<Image
width={screen.width}
height={screen.height}
objectFit='cover' 
  src={src}
  alt={`Slide ${index + 1}`}

  className=" "
/>
    </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex % images.length ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
};

export default HeroCarousel;