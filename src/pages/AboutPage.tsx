import React, { useEffect } from 'react';
import { ShieldCheck, Award, Users, Truck, CheckCircle, Wrench, Settings } from 'lucide-react';
import CallToAction from '../components/home/CallToAction';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'About Us | Nova Auto - Rapid Technomach';
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
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in">
                Powering Machines. Building Trust.
              </h1>
              
              <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Welcome to Rapid Technomach, a trusted name in the heavy equipment parts industry. Through our two specialized brands — NOVA and Rapid Bearing — we provide high-performance solutions for the construction, industrial, and engineering sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Brands</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Rapid Technomach operates through two specialized brands, each focused on delivering excellence in their respective domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* NOVA Brand */}
            <div className="bg-gradient-to-br from-primary to-primary-600 rounded-xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Wrench size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">🔧 NOVA</h3>
                  <p className="text-white/80">Genuine Parts for Backhoe Loaders</p>
                </div>
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                NOVA is Rapid Technomach's flagship brand focused on delivering premium spare parts for backhoe loaders, including JCB 3D, 3DX, and N/M series.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-lg">Our product line includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                    <span>Engine & Transmission Parts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                    <span>Hydraulic Components</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                    <span>Axles & Differentials</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-accent mr-2 flex-shrink-0" />
                    <span>Electrical & Body Parts</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-white/90 text-sm">
                Built for durability and engineered with precision, NOVA parts are designed to perform in the harshest conditions, ensuring maximum uptime and minimum maintenance for your machinery.
              </p>
            </div>

            {/* Rapid Bearing Brand */}
            <div className="bg-gradient-to-br from-accent to-accent-600 rounded-xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Settings size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">🛠️ Rapid Bearing</h3>
                  <p className="text-white/80">Your Reliable Bearing Partner</p>
                </div>
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                Rapid Bearing is Rapid Technomach's dedicated brand for high-performance industrial bearings. We serve various industries including construction, agriculture, automotive, and heavy machinery.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-lg">We offer:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                    <span>Ball Bearings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                    <span>Roller Bearings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                    <span>Tapered Bearings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                    <span>Custom & Industrial-Grade Bearing Solutions</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-white/90 text-sm">
                Our bearings are known for long life, low friction, and high load capacity. With strict quality control and technical expertise, Rapid Bearing is the go-to choice for businesses that demand precision and reliability.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Whether you're a fleet owner, contractor, or service center — our brands deliver trusted quality and performance with every part.
            </p>
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
                To provide reliable, high-performance components that keep industries running — safely, efficiently, and affordably.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <div className="flex items-center mb-6">
                <Award size={32} className="text-accent mr-4" />
                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become India's leading multi-brand solution provider for heavy machinery parts and bearing systems — built on trust, quality, and customer-first service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/15">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Genuine Quality Products</h3>
              <p className="text-white/80">
                We never compromise on product quality. Every part we sell meets or exceeds industry specifications for reliable performance.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/15">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support & Guidance</h3>
              <p className="text-white/80">
                Our technical team provides expert guidance to help you find the right parts and solutions for your specific requirements.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/15">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <Truck size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pan-India Delivery Network</h3>
              <p className="text-white/80">
                Our extensive distribution network ensures timely delivery across India, minimizing equipment downtime.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/15">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p className="text-white/80">
                We're committed to building long-term partnerships by delivering value, consistency, and innovation to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Powered by Rapid Technomach</h2>
            <p className="text-xl text-gray-600 mb-8">
              <strong>Strong and Reliable Earthmoving Parts</strong>
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We're not just selling parts — we're building long-term partnerships with our customers by delivering value, consistency, and innovation. Our commitment to excellence drives everything we do, from product sourcing to customer service.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control ensures every product meets the highest standards for performance and durability.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Customer-First Approach</h3>
              <p className="text-gray-600">
                We prioritize customer needs and build lasting relationships through exceptional service and support.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Industry Leadership</h3>
              <p className="text-gray-600">
                Continuous innovation and expertise make us a trusted leader in the heavy equipment parts industry.
              </p>
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