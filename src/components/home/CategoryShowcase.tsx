import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Wrench, Settings } from 'lucide-react';

const brands = [
  {
    id: 'nova',
    name: '🔧 NOVA',
    subtitle: 'Genuine Parts for Backhoe Loaders',
    description: 'NOVA is Rapid Technomach\'s flagship brand focused on delivering premium spare parts for backhoe loaders, including JCB 3D, 3DX, and N/M series.',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: ['Engine & Transmission Parts', 'Hydraulic Components', 'Axles & Differentials', 'Electrical & Body Parts'],
    note: 'Built for durability and engineered with precision, NOVA parts are designed to perform in the harshest conditions, ensuring maximum uptime and minimum maintenance for your machinery.'
  },
  {
    id: 'rapid-bearing',
    name: '🛠️ Rapid Bearing',
    subtitle: 'Your Reliable Bearing Partner',
    description: 'Rapid Bearing is Rapid Technomach\'s dedicated brand for high-performance industrial bearings. We serve various industries including construction, agriculture, automotive, and heavy machinery.',
    image: 'https://images.pexels.com/photos/162568/oil-pump-pump-jack-donkey-pump-jack-pump-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: ['Ball Bearings', 'Roller Bearings', 'Tapered Bearings', 'Custom & Industrial-Grade Bearing Solutions'],
    note: 'Our bearings are known for long life, low friction, and high load capacity. With strict quality control and technical expertise, Rapid Bearing is the go-to choice for businesses that demand precision and reliability.'
  }
];

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">Our Brands</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Rapid Technomach operates through two specialized brands, each focused on delivering excellence in their respective domains.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={brand.id}
              className={`rounded-xl p-8 text-white ${
                brand.id === 'nova' 
                  ? 'bg-gradient-to-br from-primary to-primary-600' 
                  : 'bg-gradient-to-br from-accent to-accent-600'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                  brand.id === 'nova' ? 'bg-accent' : 'bg-primary'
                }`}>
                  {brand.id === 'nova' ? (
                    <Wrench size={24} className="text-white" />
                  ) : (
                    <Settings size={24} className="text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{brand.name}</h3>
                  <p className="text-white/80">{brand.subtitle}</p>
                </div>
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                {brand.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-lg">
                  {brand.id === 'nova' ? 'Our product line includes:' : 'We offer:'}
                </h4>
                <ul className="space-y-2">
                  {brand.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle size={16} className={`mr-2 flex-shrink-0 ${
                        brand.id === 'nova' ? 'text-accent' : 'text-primary'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-white/90 text-sm">
                {brand.note}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-8">
            Whether you're a fleet owner, contractor, or service center — our brands deliver trusted quality and performance with every part.
          </p>
          
          <Link 
            to="/catalog" 
            className="bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center shadow-lg"
          >
            Browse Our Products
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;