import React from 'react';
import { Settings, Wrench, Zap, Filter, ChevronRight } from 'lucide-react';
import { CategoryFilter } from '../../types';

interface CategorySidebarProps {
  categories: CategoryFilter[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ 
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return <Wrench size={20} className="text-blue-600" />;
      case 'jcb-3d': return <Settings size={20} className="text-green-600" />;
      case 'jcb-nm': return <Zap size={20} className="text-purple-600" />;
      default: return <Filter size={20} className="text-gray-600" />;
    }
  };

  const getCategoryGradient = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return 'from-blue-500 to-blue-600';
      case 'jcb-3d': return 'from-green-500 to-green-600';
      case 'jcb-nm': return 'from-purple-500 to-purple-600';
      default: return 'from-primary to-primary-600';
    }
  };

  const getCategoryAccentColor = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return 'border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300';
      case 'jcb-3d': return 'border-green-200 bg-green-50 hover:bg-green-100 hover:border-green-300';
      case 'jcb-nm': return 'border-purple-200 bg-purple-50 hover:bg-purple-100 hover:border-purple-300';
      default: return 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm">
      {/* Modern Header with Gradient */}
      <div className="bg-gradient-to-r from-primary via-primary-600 to-accent p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 shadow-lg">
              <Filter size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-xl text-white">Categories</h3>
          </div>
          <p className="text-white/80 text-sm font-medium">Find parts by JCB model</p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/5 rounded-full"></div>
      </div>

      {/* All Products Option - Enhanced */}
      <div className="p-4">
        <button
          onClick={() => onSelectCategory(null)}
          className={`w-full p-4 rounded-xl transition-all duration-300 border-2 group relative overflow-hidden ${
            selectedCategory === null 
              ? 'bg-gradient-to-r from-primary to-primary-600 text-white border-primary shadow-lg transform scale-[1.02]' 
              : 'text-gray-700 hover:text-primary border-gray-200 hover:border-primary/30 hover:shadow-md bg-white hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                selectedCategory === null 
                  ? 'bg-white/20 backdrop-blur-sm shadow-lg' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-primary/10 group-hover:to-primary/20'
              }`}>
                <Filter size={20} className={selectedCategory === null ? 'text-white' : 'text-gray-600 group-hover:text-primary'} />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">All Products</div>
                <div className={`text-sm font-medium ${selectedCategory === null ? 'text-white/80' : 'text-gray-500 group-hover:text-primary/70'}`}>
                  Browse complete catalog
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className={`px-4 py-2 rounded-xl font-bold text-sm mr-2 transition-all duration-300 ${
                selectedCategory === null 
                  ? 'bg-white/20 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
              }`}>
                {categories.reduce((sum, cat) => sum + cat.count, 0)}
              </div>
              <ChevronRight size={16} className={`transition-transform duration-300 ${
                selectedCategory === null ? 'text-white/80' : 'text-gray-400 group-hover:text-primary group-hover:translate-x-1'
              }`} />
            </div>
          </div>
          
          {/* Subtle background pattern for selected state */}
          {selectedCategory === null && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
          )}
        </button>
      </div>

      {/* Category List - Enhanced */}
      <div className="px-4 pb-4 space-y-3">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.value;
          
          return (
            <button
              key={category.value}
              onClick={() => onSelectCategory(category.value)}
              className={`w-full p-4 rounded-xl transition-all duration-300 border-2 group relative overflow-hidden ${
                isSelected 
                  ? `bg-gradient-to-r ${getCategoryGradient(category.value)} text-white border-transparent shadow-lg transform scale-[1.02]`
                  : `text-gray-700 border-2 ${getCategoryAccentColor(category.value)} hover:shadow-md`
              }`}
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 shadow-sm ${
                    isSelected 
                      ? 'bg-white/20 backdrop-blur-sm shadow-lg' 
                      : 'bg-white shadow-md group-hover:shadow-lg group-hover:scale-105'
                  }`}>
                    {getCategoryIcon(category.value)}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">{category.label}</div>
                    <div className={`text-sm font-medium ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                      JCB spare parts & accessories
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`px-4 py-2 rounded-xl font-bold text-sm mr-2 transition-all duration-300 ${
                    isSelected 
                      ? 'bg-white/20 text-white shadow-md' 
                      : 'bg-white text-gray-700 shadow-sm group-hover:shadow-md'
                  }`}>
                    {category.count}
                  </div>
                  <ChevronRight size={16} className={`transition-transform duration-300 ${
                    isSelected ? 'text-white/80' : 'text-gray-400 group-hover:translate-x-1'
                  }`} />
                </div>
              </div>
              
              {/* Subtle background pattern for selected state */}
              {isSelected && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Professional Footer */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-t border-gray-200">
        <div className="text-center">
          <h4 className="font-bold text-gray-800 mb-2 text-sm">Need Help Finding Parts?</h4>
          <p className="text-gray-600 text-xs mb-3 leading-relaxed">
            Our experts are ready to assist you with technical guidance and part identification.
          </p>
          <div className="flex flex-col gap-2">
            <a 
              href="tel:+918140251789" 
              className="bg-primary hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-xs shadow-md"
            >
              📞 Call +91 8140251789
            </a>
            <a 
              href="https://wa.me/918140251789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-xs shadow-md"
            >
              💬 WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;