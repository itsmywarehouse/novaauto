import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'power-parts',
    name: '⚡ Power Parts',
    description: 'Hydraulic rams, pumps, repair kits, seals, lubricants, and hoses',
    image: '/Category/power parts.png',
    count: 28
  },
  {
    id: 'drive-motion',
    name: '🚜 Drive & Motion',
    description: 'Axle parts, transmission, pins, bushes, and premium bearings',
    image: '/Category/Drive & motion.jpg',
    count: 32,
    specialFeature: {
      title: '🔩 Bearings – Taper, Ball, Needle',
      subtitle: '🛠️ Powered by ✨ Rapid Bearing'
    }
  },
  {
    id: 'tools-attachments',
    name: '🔨 Tools & Attachments',
    description: 'Buckets, forks, couplers, breakers, GET, wear parts, and assembly kits',
    image: 'https://images.pexels.com/photos/6517112/pexels-photo-6517112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 45
  },
  {
    id: 'body-maintenance',
    name: '🛡️ Body & Maintenance',
    description: 'Cabin parts, electrical, filters, fasteners, fabrication, and misc items',
    image: 'https://images.pexels.com/photos/11002456/pexels-photo-11002456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 38
  },
  {
    id: 'case-parts',
    name: '🧱 Case Parts',
    description: 'Transmission casings, axle housings, hydraulic tanks, and structural components',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 22
  }
];

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">Browse By Category</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our extensive range of JCB parts and accessories, organized by category for easy navigation and quick access to exactly what you need.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/catalog?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-custom bg-white transition-all duration-300 hover:shadow-custom-lg hover:scale-105"
            >
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  
                  {/* Special feature for Drive & Motion (Bearings) */}
                  {category.specialFeature && (
                    <div className="mb-3 p-2 bg-accent/20 backdrop-blur-sm rounded-md border border-accent/30">
                      <div className="text-accent font-bold text-sm">
                        {category.specialFeature.title}
                      </div>
                      <div className="text-accent/90 text-xs font-medium">
                        {category.specialFeature.subtitle}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-medium text-sm">
                      {category.count} products
                    </span>
                    <div className="flex items-center text-white group-hover:text-accent transition-colors text-sm">
                      Explore
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;