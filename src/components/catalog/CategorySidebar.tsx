import React from 'react';
import { Settings, Wrench, Zap, Filter } from 'lucide-react';
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
      case 'rapid-bearing': return <Settings size={20} className="text-orange-600" />;
      default: return <Filter size={20} className="text-gray-600" />;
    }
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return 'hover:bg-blue-50 hover:border-blue-200';
      case 'jcb-3d': return 'hover:bg-green-50 hover:border-green-200';
      case 'jcb-nm': return 'hover:bg-purple-50 hover:border-purple-200';
      case 'rapid-bearing': return 'hover:bg-orange-50 hover:border-orange-200';
      default: return 'hover:bg-gray-50 hover:border-gray-200';
    }
  };

  const getSelectedCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return 'bg-blue-500 border-blue-500 text-white shadow-lg';
      case 'jcb-3d': return 'bg-green-500 border-green-500 text-white shadow-lg';
      case 'jcb-nm': return 'bg-purple-500 border-purple-500 text-white shadow-lg';
      case 'rapid-bearing': return 'bg-orange-500 border-orange-500 text-white shadow-lg';
      default: return 'bg-primary border-primary text-white shadow-lg';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-custom border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
        <div className="flex items-center">
          <Filter size={20} className="mr-2" />
          <h3 className="font-bold text-lg">Categories</h3>
        </div>
      </div>

      {/* All Products Option */}
      <button
        onClick={() => onSelectCategory(null)}
        className={`w-full p-4 text-left transition-all duration-200 border-b border-gray-100 ${
          selectedCategory === null 
            ? 'bg-primary text-white' 
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
              selectedCategory === null ? 'bg-white/20' : 'bg-gray-100'
            }`}>
              <Filter size={18} className={selectedCategory === null ? 'text-white' : 'text-gray-600'} />
            </div>
            <div>
              <div className="font-semibold">All Products</div>
              <div className={`text-sm ${selectedCategory === null ? 'text-white/80' : 'text-gray-500'}`}>
                View all items
              </div>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-bold ${
            selectedCategory === null 
              ? 'bg-white/20 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </div>
        </div>
      </button>

      {/* Category List */}
      <div className="divide-y divide-gray-100">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.value;
          
          return (
            <button
              key={category.value}
              onClick={() => onSelectCategory(category.value)}
              className={`w-full p-4 text-left transition-all duration-200 ${
                isSelected 
                  ? getSelectedCategoryColor(category.value)
                  : `text-gray-700 border-transparent ${getCategoryColor(category.value)}`
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                    isSelected ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {getCategoryIcon(category.value)}
                  </div>
                  <div>
                    <div className="font-semibold">{category.label}</div>
                    <div className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                      JCB spare parts
                    {category.value === 'rapid-bearing' ? 'Industrial bearings' : 'JCB spare parts'}
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                  isSelected 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySidebar;