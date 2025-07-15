import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'hydraulic',
    name: 'Hydraulic Parts',
    description: 'High-performance cylinders, pumps, valves, and hoses',
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 25
  },
  {
    id: 'bearings',
    name: 'Bearings – Taper, Ball, Needle',
    description: 'Premium industrial bearings powered by Rapid Bearing',
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 35,
    specialBrand: 'Rapid Bearing'
  },
  {
    id: 'engine',
    name: 'Engine Components',
    description: 'Pistons, turbochargers, gaskets, and cooling systems',
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 18
  },
  {
    id: 'filters',
    name: 'Filters & Fluids',
    description: 'Oil, air, fuel, and hydraulic filtration solutions',
    image: 'https://images.pexels.com/photos/11002456/pexels-photo-11002456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 15
  },
  {
    id: 'electrical',
    name: 'Electrical Systems',
    description: 'Starters, alternators, sensors, and control modules',
    image: 'https://images.pexels.com/photos/10809076/pexels-photo-10809076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 22
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Lighting, cab components, attachments, and safety equipment',
    image: 'https://images.pexels.com/photos/760110/pexels-photo-760110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 20
  }
];

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">Browse By Category</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our extensive range of Bekoloder parts and accessories, organized by category for easy navigation and quick access.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/catalog?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-custom bg-white transition-all duration-300 hover:shadow-custom-lg hover:scale-105 aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 z-10"></div>
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                  {category.name === 'Bearings – Taper, Ball, Needle' ? (
                    <>
                      🔩 {category.name}
                      <div className="text-xs sm:text-sm text-accent font-bold mt-1 flex items-center">
                        🛠️ Powered by <span className="underline ml-1">Rapid Bearing</span>
                      </div>
                    </>
                  ) : (
                    category.name
                  )}
                </h3>
                {category.name !== 'Bearings – Taper, Ball, Needle' && (
                  <p className="text-white/80 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                )}
                {category.name === 'Bearings – Taper, Ball, Needle' && (
                  <p className="text-white/80 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    High-quality taper, ball, and needle bearings for industrial applications
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-accent font-medium text-xs sm:text-sm">
                    {category.count} products
                  </span>
                  <div className="flex items-center text-white group-hover:text-accent transition-colors text-xs sm:text-sm">
                    Explore
                    <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
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