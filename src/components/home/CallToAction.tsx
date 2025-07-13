import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
            }}
          ></div>
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
          
          <div className="relative z-20 py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Keep Your Equipment Running at Peak Performance?
              </h2>
              
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Contact our team today for expert advice on the right Bekoloder parts for your specific machinery and requirements.
              </p>
              
              <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Link
                  to="/catalog"
                  className="bg-accent hover:bg-accent-600 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg text-base min-h-[48px]"
                >
                  Browse Our Catalog
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href="tel:+918140251789"
                    className="bg-white hover:bg-gray-100 text-primary font-semibold px-6 sm:px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg text-base min-h-[48px]"
                  >
                    <Phone size={20} className="mr-2" />
                    Call Now
                  </a>
                  
                  <a 
                    href="https://wa.me/918140251789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg text-base min-h-[48px]"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;