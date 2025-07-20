import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'jcb-3dx',
    name: '🚜 JCB 3DX',
    description: 'Complete range of spare parts for JCB 3DX backhoe loaders',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 14,
    subCategories: ['Hydraulic Ram', 'Transmission', 'Bearing', 'Filters', 'Engine Parts']
  },
  {
    id: 'jcb-3d',
    name: '🔧 JCB 3D',
    description: 'Genuine parts and accessories for JCB 3D series machines',
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 14,
    subCategories: ['Pivot Pins', 'Electrical Parts', 'Cabin Parts', 'Seals & O-Rings', 'Bushes']
  },
  {
    id: 'jcb-nm',
    name: '⚡ JCB N/M (New Model)',
    description: 'Latest generation parts for JCB New Model series',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 14,
    specialFeature: {
      title: '🔩 Premium Bearings Available',
      subtitle: '🛠️ Powered by ✨ Rapid Bearing'
    },
    subCategories: ['Bearing', 'Hydraulic System', 'Fabrication Parts', 'Bolts & Nuts', 'Miscellaneous']
  }
];

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">Browse By Category</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our extensive range of JCB parts and accessories, organized by model for easy navigation and quick access to exactly what you need.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                  
                  {/* Special feature for JCB N/M (Bearings) */}
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
                  
                  {/* Sub-categories preview */}
                  {category.subCategories && (
                    <div className="mb-4">
                      <p className="text-white/70 text-xs mb-2">Popular sub-categories:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.subCategories.slice(0, 3).map((subCat, idx) => (
                          <span key={idx} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                            {subCat}
                          </span>
                        ))}
                        {category.subCategories.length > 3 && (
                          <span className="text-xs text-white/70">+{category.subCategories.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-medium text-sm">
                      {category.count} sub-categories
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