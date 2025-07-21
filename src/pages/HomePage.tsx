import React, { useEffect } from 'react';
import ProductSlider from '../components/home/ProductSlider';
import BrandIntroduction from '../components/home/BrandIntroduction';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'NOVA Auto by Rapid Technomach | Genuine Backhoe Loader Parts';
  }, []);

  return (
    <div className="pt-0">
      <ProductSlider />
      <BrandIntroduction />
      <CallToAction />
    </div>
  );
};

export default HomePage;