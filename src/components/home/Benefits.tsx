import React from 'react';
import { ShieldCheck, Truck, Clock, Headset } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck size={32} className="text-accent" />,
    title: 'Genuine Quality Products',
    description: 'We never compromise on product quality. Every part we sell meets or exceeds industry specifications for reliable performance.'
  },
  {
    icon: <Headset size={32} className="text-accent" />,
    title: 'Expert Support & Guidance',
    description: 'Our technical team provides expert guidance to help you find the right parts and solutions for your specific requirements.'
  },
  {
    icon: <Truck size={32} className="text-accent" />,
    title: 'Pan-India Delivery Network',
    description: 'Our extensive distribution network ensures timely delivery across India, minimizing equipment downtime.'
  },
  {
    icon: <Clock size={32} className="text-accent" />,
    title: 'Customer Satisfaction',
    description: 'We\'re committed to building long-term partnerships by delivering value, consistency, and innovation to our customers.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Why Choose Us?</h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
          We are committed to providing high-quality parts and bearings with exceptional service and support across India to keep your machinery running at peak performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105"
            >
              <div className="mb-3 sm:mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
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