import React, { useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryShowcase from '../components/home/CategoryShowcase';
import Benefits from '../components/home/Benefits';
import CallToAction from '../components/home/CallToAction';
import { getFeaturedProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'NOVA Auto by Rapid Technomach | Genuine Backhoe Loader Parts';
  }, []);

  return (
    <div>
      <HeroBanner />
      <FeaturedProducts products={featuredProducts} />
      <CategoryShowcase />
      <Benefits />
      <CallToAction />
    </div>
  );
};

export default HomePage;