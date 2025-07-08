import React, { useEffect } from 'react';
import { ShieldCheck, Award, Users, Truck, CheckCircle } from 'lucide-react';
import CallToAction from '../components/home/CallToAction';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'About Us | Nova Auto';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div 
          className="relative py-32 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in">
                About Nova Auto
              </h1>
              
              <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Premium supplier of JCB spare parts with a commitment to quality, reliability, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2005, Nova Auto began with a simple mission: to provide high-quality JCB spare parts at competitive prices with exceptional customer service. What started as a small operation has grown into a trusted supplier for construction companies, equipment rental businesses, and maintenance professionals across the country.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our founder, Michael Nova, spent over 15 years working as a JCB maintenance engineer before identifying a gap in the market for reliable parts with technical support. His vision was to create a company that didn't just sell parts, but provided comprehensive solutions for heavy machinery maintenance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Nova Auto has established itself as an industry leader with a catalog of over 5,000 parts and a team of experts who understand the unique challenges of maintaining heavy equipment. Our commitment to quality and service remains at the heart of everything we do.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Nova Auto facility" 
                className="w-full h-auto rounded-lg shadow-custom"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg shadow-custom">
                <p className="font-bold text-lg">17+ Years</p>
                <p>of Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <div className="flex items-center mb-6">
                <ShieldCheck size={32} className="text-accent mr-4" />
                <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality JCB spare parts and exceptional technical support that maximizes equipment uptime and productivity. We are committed to building long-term relationships with our customers by delivering reliable products, competitive pricing, and industry-leading expertise.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <div className="flex items-center mb-6">
                <Award size={32} className="text-accent mr-4" />
                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and respected supplier of JCB spare parts in the industry, recognized for our product quality, technical expertise, and customer-focused approach. We aim to set the standard for excellence in the heavy equipment parts industry through innovation, integrity, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/15">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-white/80">
                We never compromise on product quality. Every part we sell meets or exceeds OEM specifications to ensure reliable performance.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/15">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-white/80">
                We build lasting relationships by understanding our customers' needs and providing personalized solutions and support.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/15">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <Truck size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-white/80">
                Our customers depend on us for timely delivery and consistent product availability to minimize equipment downtime.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/15">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-white/80">
                Our team brings decades of industry experience to provide technical advice and solutions for complex maintenance challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Nova Auto</h2>
            <p className="text-gray-600">
              We've earned the trust of hundreds of companies across the country through our commitment to excellence in every aspect of our business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-custom">
              <CheckCircle size={24} className="text-accent mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Extensive Inventory</h3>
                <p className="text-gray-600">
                  With over 5,000 parts in stock, we have one of the most comprehensive inventories of JCB spare parts in the region, ensuring quick delivery and minimal downtime.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-custom">
              <CheckCircle size={24} className="text-accent mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Technical Expertise</h3>
                <p className="text-gray-600">
                  Our team includes former JCB technicians and engineers who can provide detailed technical advice to help you find the right parts for your specific equipment model.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-custom">
              <CheckCircle size={24} className="text-accent mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  All our parts undergo rigorous quality control checks to ensure they meet the highest standards for durability and performance in demanding conditions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-custom">
              <CheckCircle size={24} className="text-accent mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  We offer fair pricing without compromising on quality, with special discounts for bulk orders and loyal customers to maximize your maintenance budget.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-custom">
              <CheckCircle size={24} className="text-accent mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Fast Shipping</h3>
                <p className="text-gray-600">
                  With multiple distribution centers across the country, we can deliver most parts within 1-3 business days, with expedited options available for emergency needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-custom">
              <CheckCircle size={24} className="text-accent mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Comprehensive Warranty</h3>
                <p className="text-gray-600">
                  We stand behind our products with industry-leading warranty coverage, giving you peace of mind with every purchase from Nova Auto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default AboutPage;