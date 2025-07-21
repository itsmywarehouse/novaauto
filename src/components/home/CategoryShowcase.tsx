import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const categories = [
  {
    id: 'jcb-3dx',
    name: 'JCB 3DX',
    emoji: '🚜',
    description: 'Complete range of spare parts for JCB 3DX backhoe loaders',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 14,
    color: 'from-blue-500 to-blue-600',
    subCategories: ['Hydraulic Ram', 'Transmission', 'Bearing', 'Filters', 'Engine Parts']
  },
  {
    id: 'jcb-3d',
    name: 'JCB 3D',
    emoji: '🔧',
    description: 'Genuine parts and accessories for JCB 3D series machines',
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 14,
    color: 'from-green-500 to-green-600',
    subCategories: ['Pivot Pins', 'Electrical Parts', 'Cabin Parts', 'Seals & O-Rings', 'Bushes']
  },
  {
    id: 'jcb-nm',
    name: 'JCB N/M (New Model)',
    emoji: '⚡',
    description: 'Latest generation parts for JCB New Model series',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 14,
    color: 'from-purple-500 to-purple-600',
    specialFeature: {
      title: 'Premium Bearings Available',
      subtitle: 'Powered by Rapid Bearing'
    },
    subCategories: ['Bearing', 'Hydraulic System', 'Fabrication Parts', 'Bolts & Nuts', 'Miscellaneous']
  }
];

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-2 mb-6 shadow-md">
            <Zap size={16} className="text-accent mr-2" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Product Categories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Browse by
            <span className="block text-accent">JCB Model</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our extensive range of JCB parts and accessories, organized by model 
            for easy navigation and quick access to exactly what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-3xl shadow-xl bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 z-10`}></div>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Icon */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <span className="text-3xl">{category.emoji}</span>
                  </div>
                </div>
                
                {/* Special Feature Badge */}
                {category.specialFeature && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-accent/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-accent/30">
                      <div className="text-white font-bold text-xs">
                        🔩 {category.specialFeature.title}
                      </div>
                      <div className="text-white/90 text-xs">
                        🛠️ {category.specialFeature.subtitle}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Sub-categories Preview */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Popular Categories:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.subCategories.slice(0, 3).map((subCat, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {subCat}
                      </span>
                    ))}
                    {category.subCategories.length > 3 && (
                      <span className="text-xs text-gray-500">+{category.subCategories.length - 3} more</span>
                    )}
                  </div>
                </div>
                
                {/* CTA */}
                <Link 
                  to={`/catalog?category=${category.id}`}
                  className="group/btn inline-flex items-center justify-between w-full bg-primary hover:bg-accent text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center">
                    <span>Explore {category.count} Categories</span>
                  </div>
                  <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <Link 
            to="/catalog" 
            className="inline-flex items-center bg-white hover:bg-gray-50 text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg border-2 border-primary/10"
          >
            View Complete Catalog
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;