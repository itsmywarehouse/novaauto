import React from 'react';
import { HelpCircle } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

const FAQDropdown: React.FC = () => {
  const faqItems = [
    {
      id: 'shipping',
      title: 'Shipping & Delivery',
      icon: <HelpCircle size={16} />,
      badge: 3,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Do you ship across India?</h4>
            <p className="text-gray-600 text-sm">
              Yes, we ship across India. Shipping rates and delivery times vary depending on the destination. 
              We offer express delivery for urgent requirements.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">What are the shipping costs?</h4>
            <p className="text-gray-600 text-sm">
              Shipping costs are calculated based on weight, dimensions, and destination. 
              Free shipping is available for orders above ₹5,000.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">How can I track my order?</h4>
            <p className="text-gray-600 text-sm">
              Once your order ships, you will receive a tracking number via email. 
              You can also contact our customer service team for updates.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'returns',
      title: 'Returns & Exchanges',
      icon: <HelpCircle size={16} />,
      badge: 2,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">What is your return policy?</h4>
            <p className="text-gray-600 text-sm">
              We accept returns within 30 days of purchase for most items in original, unused condition. 
              Custom orders may have different return policies.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">How do I initiate a return?</h4>
            <p className="text-gray-600 text-sm">
              Contact our customer service team with your order number and reason for return. 
              We'll provide you with return instructions and a prepaid shipping label if applicable.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'products',
      title: 'Product Information',
      icon: <HelpCircle size={16} />,
      badge: 4,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Are your parts genuine?</h4>
            <p className="text-gray-600 text-sm">
              Yes, all our parts are genuine and manufactured to OEM specifications. 
              We source directly from authorized suppliers and manufacturers.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Do you offer bulk discounts?</h4>
            <p className="text-gray-600 text-sm">
              Yes, we offer tiered discounts for bulk orders. 
              Please contact our sales team for a custom quote based on your requirements.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Can you help me find the right part?</h4>
            <p className="text-gray-600 text-sm">
              Absolutely! Our technical team can help you identify the correct parts for your machinery. 
              Contact us with your equipment model and serial number.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Do you provide warranties?</h4>
            <p className="text-gray-600 text-sm">
              Yes, all our parts come with manufacturer warranties. 
              Warranty periods vary by product type and manufacturer.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'support',
      title: 'Technical Support',
      icon: <HelpCircle size={16} />,
      badge: 2,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Do you provide installation support?</h4>
            <p className="text-gray-600 text-sm">
              We provide technical guidance and installation instructions for most parts. 
              For complex installations, we can recommend certified technicians in your area.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">What are your support hours?</h4>
            <p className="text-gray-600 text-sm">
              Our technical support team is available Monday through Saturday, 9 AM to 7 PM. 
              You can reach us via phone, email, or WhatsApp.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-custom p-6">
      <h2 className="text-2xl font-semibold text-primary mb-6">Frequently Asked Questions</h2>
      <DropdownMenu items={faqItems} />
    </div>
  );
};

export default FAQDropdown;