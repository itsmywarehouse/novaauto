import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, Mail } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-accent"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Keep Your Equipment
            <span className="block text-accent">Running at Peak Performance?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Contact our expert team today for personalized advice on the right Backhoe Loader parts 
            for your specific machinery and requirements. We're here to help you succeed.
          </p>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Link
              to="/catalog"
              className="group bg-accent hover:bg-accent-600 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-xl min-h-[64px]"
            >
              <span className="mr-2">Browse Catalog</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a 
              href="tel:+918140251789"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-white/30 min-h-[64px]"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </a>
            
            <a 
              href="https://wa.me/918140251789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-xl min-h-[64px]"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </a>
            
            <a 
              href="mailto:novaauto@outlook.in"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center border border-white/30 min-h-[64px]"
            >
              <Mail size={20} className="mr-2" />
              Email Us
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-accent font-bold text-lg mb-2">📞 Call Us</div>
                <div className="text-white/90">+91 8140251789</div>
              </div>
              <div>
                <div className="text-accent font-bold text-lg mb-2">📧 Email Us</div>
                <div className="text-white/90">novaauto@outlook.in</div>
              </div>
              <div>
                <div className="text-accent font-bold text-lg mb-2">📍 Visit Us</div>
                <div className="text-white/90">Rajkot, Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;