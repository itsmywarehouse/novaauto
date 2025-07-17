import React, { useState } from 'react';
import { Settings, Zap, Hammer, Shield, Package } from 'lucide-react';
import { CategoryFilter } from '../../types';
import { getAllCategories } from '../../data/categories';
import DropdownMenu from '../common/DropdownMenu';

interface CategoryFilterProps {
  categories: CategoryFilter[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilterComponent: React.FC<CategoryFilterProps> = ({ 
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  const categoryData = getAllCategories();

  const handleCategoryClick = (categoryId: string | null) => {
    onSelectCategory(categoryId);
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'power-parts': return <Zap size={16} />;
      case 'drive-motion': return <Settings size={16} />;
      case 'tools-attachments': return <Hammer size={16} />;
      case 'body-maintenance': return <Shield size={16} />;
      case 'case-parts': return <Package size={16} />;
      default: return null;
    }
  };

  // Create dropdown items from categories
  const dropdownItems = categories.map((category) => {
    const categoryInfo = categoryData.find(cat => cat.id === category.value);
    const isSelected = selectedCategory === category.value;
    
    return {
      id: category.value,
      title: category.label,
      icon: getCategoryIcon(category.value),
      badge: category.count,
      specialFeature: category.value === 'drive-motion' ? {
        title: '🔩 Includes Rapid Bearing Products',
        subtitle: '🛠️ Powered by ✨ Rapid Bearing'
      } : undefined,
      content: (
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryClick(category.value)}
            className={`w-full text-left px-3 py-2 rounded transition-colors text-sm font-medium ${
              isSelected 
                ? 'bg-primary text-white' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
            }`}
          >
            View All {category.label}
          </button>
          
          {categoryInfo && (
            <div className="border-t border-gray-200 pt-2">
              <p className="text-xs text-gray-500 mb-2 font-medium">Subcategories:</p>
              <ul className="space-y-1">
                {categoryInfo.subcategories.map((subcategory, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category.value)}
                      className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors rounded"
                    >
                      {subcategory.name === '🔩 Bearings – Taper, Ball, Needle' ? (
                        <div>
                          <div className="font-medium">{subcategory.name}</div>
                          <div className="text-xs text-accent font-bold">
                            🛠️ Powered by ✨ Rapid Bearing
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="font-medium">{subcategory.name}</div>
                          {subcategory.description && (
                            <div className="text-xs text-gray-500 mt-1">
                              {subcategory.description}
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    };
  });

  return (
    <div className="bg-white rounded-lg shadow-custom p-5">
      <h3 className="font-semibold text-lg text-primary mb-4">Categories</h3>
      
      {/* All Products Button */}
      <button
        onClick={() => handleCategoryClick(null)}
        className={`w-full text-left px-3 py-2 rounded transition-colors flex justify-between items-center mb-4 ${
          selectedCategory === null 
            ? 'bg-primary text-white font-medium' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <span>All Products</span>
        <span className={`text-sm rounded-full px-2 py-0.5 ${
          selectedCategory === null 
            ? 'bg-white text-primary' 
            : 'bg-gray-100 text-gray-700'
        }`}>
          {categories.reduce((sum, cat) => sum + cat.count, 0)}
        </span>
      </button>
      
      {/* Category Dropdowns */}
      <DropdownMenu items={dropdownItems} />
    </div>
  );
};

export default CategoryFilterComponent;