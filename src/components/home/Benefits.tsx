import React from 'react';
import { ShieldCheck, Truck, Clock, Headset } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck size={32} className="text-accent" />,
    title: 'Genuine Quality',
    description: 'All our parts meet or exceed OEM specifications for perfect fitment and reliable performance.'
  },
  {
    icon: <Truck size={32} className="text-accent" />,
    title: 'Fast Shipping',
    description: 'Quick delivery nationwide with express shipping options for urgent requirements.'
  },
  {
    icon: <Clock size={32} className="text-accent" />,
    title: 'Extended Warranty',
    description: 'Comprehensive warranty coverage for peace of mind with every purchase.'
  },
  {
    icon: <Headset size={32} className="text-accent" />,
    title: 'Expert Support',
    description: 'Technical assistance from experienced professionals to help you find the right parts.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Why Choose Nova Auto</h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
          We are committed to providing high-quality JCB spare parts with exceptional service and support across India to keep your machinery running at peak performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;