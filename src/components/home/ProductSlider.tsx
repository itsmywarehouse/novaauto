import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SliderProduct {
  id: string;
  name: string;
  tagline: string;
  image: string;
  category: string;
  link: string;
}

const sliderProducts: SliderProduct[] = [
  {
    id: '1',
    name: 'PIN/BUSH',
    tagline: 'All Types of Pin Bushes for JCB 3D & 3DX – Precision Engineered for Performance',
    image: '/slider/pin_bush.jpeg',
    category: 'jcb-3dx',
    link: '/catalog?category=jcb-3dx'
  },
  {
    id: '2',
    name: 'Rapid Bearings',
    tagline: 'Complete Bearing Solutions for Every Industry',
    image: '/slider/bearing.jpeg',
    category: 'bearing',
    link: '/catalog'
  },
  {
    id: '3',
    name: 'ANNULUS RING',
    tagline: 'Nova Auto – Powering Performance with Reliable Parts',
    image: '/slider/annulus_ring.jpeg',
    category: 'jcb-nm',
    link: '/catalog?category=jcb-nm'
  },
  {
    id: '4',
    name: 'Complete Engine Solutions',
    tagline: 'Reliable engine parts for uninterrupted operations',
    image: '/slider/planet_w_ bearing.jpeg',
    category: 'engine',
    link: '/catalog'
  }
];

const ProductSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderProducts.length) % sliderProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[75vh] bg-black overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {sliderProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100 z-10' 
                : 'opacity-0 scale-105 z-0 pointer-events-none'
            }`}
          >
            {/* Main Product Image (centered, prominent) */}
            <img 
              src={product.image}
              alt={product.name}
              className="object-contain max-h-[60vh] sm:max-h-[70vh] lg:max-h-[75vh] w-auto mx-auto rounded-3xl shadow-2xl border-4 border-white/20 bg-white/10"
              draggable={false}
            />
            {/* Minimal Overlay: Name and Tagline at bottom */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 rounded-xl px-6 py-4 text-center shadow-lg max-w-lg w-[90vw]">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 truncate">{product.name}</h1>
              <p className="text-base sm:text-lg text-white/90 font-light mb-2 truncate">{product.tagline}</p>
              <Link
                to={product.link}
                className="inline-flex items-center bg-accent hover:bg-accent-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow text-base"
              >
                Explore Collection
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/30 hover:bg-accent/80 text-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 shadow-lg border-2 border-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/30 hover:bg-accent/80 text-accent hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 shadow-lg border-2 border-white/40"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {sliderProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125 shadow-lg border-accent' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1.5 bg-white/30 rounded-full overflow-hidden z-20">
        <div 
          className="h-full bg-accent transition-all duration-500 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / sliderProducts.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default ProductSlider;