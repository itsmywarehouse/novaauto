import React from 'react';
import { ShieldCheck, Truck, Clock, Headset, Award, Users } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck size={40} className="text-white" />,
    title: 'Genuine Quality Products',
    description: 'Every part meets or exceeds industry specifications with rigorous quality control for reliable performance.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Headset size={40} className="text-white" />,
    title: 'Expert Support & Guidance',
    description: 'Our technical team provides expert guidance to help you find the right parts and solutions.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <Truck size={40} className="text-white" />,
    title: 'Pan-India Delivery Network',
    description: 'Extensive distribution network ensures timely delivery across India, minimizing equipment downtime.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <Clock size={40} className="text-white" />,
    title: 'Fast Response Time',
    description: '24/7 customer support with rapid response times to keep your operations running smoothly.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: <Award size={40} className="text-white" />,
    title: 'Industry Leadership',
    description: 'Decades of experience and continuous innovation make us a trusted leader in the industry.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: <Users size={40} className="text-white" />,
    title: 'Customer Satisfaction',
    description: 'Building long-term partnerships by delivering value, consistency, and innovation to our customers.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-2 mb-6">
            <Award size={16} className="text-accent mr-2" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Excellence in Every
            <span className="block text-accent">Aspect of Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing high-quality parts and bearings with exceptional 
            service and support across India to keep your machinery running at peak performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-90`}></div>
              
              {/* Content */}
              <div className="relative p-8 text-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/90 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Quality Parts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Pan-India</div>
              <div className="text-gray-600 font-medium">Delivery Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;