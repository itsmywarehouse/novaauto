import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Contact Us | Nova Auto';
  }, []);

  return (
    <>
      <div className="pt-28 pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 py-8 bg-gray-50 rounded-lg px-6">
          <h1 className="text-3xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions about our products or need technical support? 
            Our team is here to help. Reach out to us through any of the methods below.
          </p>
        </div>
        
      </div>
      </div>
    
      <div className="bg-gray-50 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-custom p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-custom-lg">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
              <Phone size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team is available Monday through Saturday, 9am to 7pm.
            </p>
            <a 
              href="tel:+918140251789" 
              className="text-accent hover:text-accent-600 font-medium transition-colors"
            >
              +91 8140251789
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-custom p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-custom-lg">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Send us an email and we'll respond within one business day.
            </p>
            <a 
              href="mailto:novaauto@outlook.in" 
              className="text-accent hover:text-accent-600 font-medium transition-colors"
            >
              novaauto@outlook.in
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-custom p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-custom-lg">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">
              Our headquarters and main distribution center are located at:
            </p>
            <address className="text-accent not-italic">
              Rapid Technomat<br />
              Shapar, Gujarat 360024<br />
              India
            </address>
          </div>
        </div>
        
        {/* WhatsApp Contact Card */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center">
          <div className="flex justify-center mb-4">
            <MessageCircle size={32} className="text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">Quick WhatsApp Support</h3>
          <p className="text-green-700 mb-4">Get instant responses to your queries via WhatsApp</p>
          <a href="https://wa.me/918140251789" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center">
            <MessageCircle size={18} className="mr-2" />
            Chat on WhatsApp
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-primary mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock size={18} className="text-accent mr-2" />
                      <span className="text-gray-700">Monday - Friday:</span>
                    </div>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock size={18} className="text-accent mr-2" />
                      <span className="text-gray-700">Saturday:</span>
                    </div>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock size={18} className="text-accent mr-2" />
                      <span className="text-gray-700">Sunday:</span>
                    </div>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px] relative">
                {/* This would normally be a Google Maps embed - using a placeholder image for this demo */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin size={48} className="text-primary mx-auto mb-2" />
                    <p className="text-gray-600">
                      Our location in Shapar, Gujarat:<br />
                      Rapid Technomat, Shapar, Gujarat 360024, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-custom p-8 mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">
                Do you ship across India?
              </h3>
              <p className="text-gray-600">
                Yes, we ship across India. Shipping rates and delivery times vary depending on the destination. We offer express delivery for urgent requirements. Please contact us for specific details.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We accept returns within 30 days of purchase for most items in original, unused condition. Custom orders may have different return policies. A restocking fee may apply.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">
                How can I check the status of my order?
              </h3>
              <p className="text-gray-600">
                Once your order ships, you will receive a tracking number via email. You can also contact our customer service team with your order number for updates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">
                Do you offer bulk discounts?
              </h3>
              <p className="text-gray-600">
                Yes, we offer tiered discounts for bulk orders. Please contact our sales team for a custom quote based on your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactPage;