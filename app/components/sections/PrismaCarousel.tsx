'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './PrismaCarousel.module.css'; // create this CSS module for custom styles if needed

const PrismaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 3;
  const progressRef = useRef<HTMLDivElement>(null);
  const autoAdvanceTimer = useRef<NodeJS.Timeout | null>(null);

  const updateProgress = (index: number) => {
    if (progressRef.current) {
      progressRef.current.style.width = `${((index + 1) / slideCount) * 100}%`;
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slideCount;
    setCurrentSlide(next);
    updateProgress(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slideCount) % slideCount;
    setCurrentSlide(prev);
    updateProgress(prev);
  };

  useEffect(() => {
    autoAdvanceTimer.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoAdvanceTimer.current) {
        clearInterval(autoAdvanceTimer.current);
      }
    };
  }, [currentSlide]);

  const slideClass = (index: number) => {
    if (index === currentSlide) return 'carousel-item active';
    if (index === (currentSlide + 1) % slideCount) return 'carousel-item next';
    if (index === (currentSlide - 1 + slideCount) % slideCount) return 'carousel-item prev';
    return 'carousel-item hidden';
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
        <div ref={progressRef} className="progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 w-1/3 transition-all duration-500" />
      </div>

      {/* Navigation buttons */}
      <button onClick={prevSlide} className="nav-button absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white">
        ←
      </button>
      <button onClick={nextSlide} className="nav-button absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white">
        →
      </button>

      {/* Carousel track */}
      <div className="relative h-[500px] overflow-hidden">
        {[0, 1, 2].map((index) => (
          <div key={index} className={`${slideClass(index)} absolute top-0 left-0 w-full h-full`}>
            <div className="w-full h-full p-4 sm:p-8">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <img
                  src={
                    index === 0
                      ? 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80'
                      : index === 1
                      ? 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80'
                      : 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80'
                  }
                  alt="Slide"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`w-8 sm:w-12 h-1 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white/40' : 'bg-white/20'
            } hover:bg-white/60`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PrismaCarousel;
