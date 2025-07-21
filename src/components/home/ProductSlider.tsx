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
    name: 'JCB 3DX Hydraulic System',
    tagline: 'Premium hydraulic components for maximum performance',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    category: 'jcb-3dx',
    link: '/catalog?category=jcb-3dx'
  },
  {
    id: '2',
    name: 'Precision Bearing Solutions',
    tagline: 'High-performance bearings for industrial applications',
    image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    category: 'bearing',
    link: '/catalog'
  },
  {
    id: '3',
    name: 'JCB N/M Series Parts',
    tagline: 'Latest generation components for new model series',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    category: 'jcb-nm',
    link: '/catalog?category=jcb-nm'
  },
  {
    id: '4',
    name: 'Complete Engine Solutions',
    tagline: 'Reliable engine parts for uninterrupted operations',
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
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
    <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {sliderProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <div className="animate-fade-in">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                      {product.name}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light mb-8 leading-relaxed">
                      {product.tagline}
                    </p>
                    <Link
                      to={product.link}
                      className="inline-flex items-center bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl text-lg"
                    >
                      Explore Collection
                      <ChevronRight size={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {sliderProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-accent transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / sliderProducts.length) * 100}%` 
          }}
        />
      </div>
    </div>
  );
};

export default ProductSlider;