import React, { useState } from 'react';
import { Settings, Wrench, Zap } from 'lucide-react';
import { CategoryFilter } from '../../types';
import { getAllCategories } from '../../data/categories';
import { getSubCategoriesWithCounts } from '../../data/products';
import DropdownMenu from '../common/DropdownMenu';

interface CategoryFilterProps {
  categories: CategoryFilter[];
  selectedCategory: string | null;
  selectedSubCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onSelectSubCategory: (subCategory: string | null) => void;
}

const CategoryFilterComponent: React.FC<CategoryFilterProps> = ({ 
  categories,
  selectedCategory,
  selectedSubCategory,
  onSelectCategory,
  onSelectSubCategory
}) => {
  const categoryData = getAllCategories();
  const subCategories = getSubCategoriesWithCounts(selectedCategory as any);

  const handleCategoryClick = (categoryId: string | null) => {
    onSelectCategory(categoryId);
    // Reset sub-category when main category changes
    if (categoryId !== selectedCategory) {
      onSelectSubCategory(null);
    }
  };

  const handleSubCategoryClick = (subCategoryId: string | null) => {
    onSelectSubCategory(subCategoryId);
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'jcb-3dx': return <Wrench size={16} />;
      case 'jcb-3d': return <Settings size={16} />;
      case 'jcb-nm': return <Zap size={16} />;
      default: return null;
    }
  };

  // Create dropdown items from main categories
  const mainCategoryItems = categories.map((category) => {
    const categoryInfo = categoryData.find(cat => cat.id === category.value);
    const isSelected = selectedCategory === category.value;
    
    return {
      id: category.value,
      title: category.label,
      icon: getCategoryIcon(category.value),
      badge: category.count,
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
              <p className="text-xs text-gray-500 mb-2 font-medium">Sub-Categories:</p>
              <ul className="space-y-1">
                {categoryInfo.subcategories.slice(0, 6).map((subcategory, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        handleCategoryClick(category.value);
                        handleSubCategoryClick(subcategory.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''));
                      }}
                      className="w-full text-left px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors rounded"
                    >
                      <div className="font-medium">{subcategory.name}</div>
                      {subcategory.description && (
                        <div className="text-xs text-gray-500 mt-1">
                          {subcategory.description}
                        </div>
                      )}
                    </button>
                  </li>
                ))}
                {categoryInfo.subcategories.length > 6 && (
                  <li className="text-xs text-gray-500 px-2 py-1">
                    +{categoryInfo.subcategories.length - 6} more categories...
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      )
    };
  });

  return (
    <div className="bg-white rounded-xl shadow-custom border border-gray-100 p-6 transition-all duration-300 hover:shadow-custom-lg">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
          <Settings size={16} className="text-white" />
        </div>
        <h3 className="font-bold text-xl text-primary">Filter Products</h3>
      </div>
      
      {/* All Products Button */}
      <button
        onClick={() => {
          handleCategoryClick(null);
          handleSubCategoryClick(null);
        }}
        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex justify-between items-center mb-6 border-2 ${
          selectedCategory === null 
            ? 'bg-primary text-white font-semibold border-primary shadow-md' 
            : 'text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-primary hover:shadow-sm'
        }`}
      >
        <div className="flex items-center">
          <Settings size={18} className={`mr-3 ${selectedCategory === null ? 'text-white' : 'text-gray-500'}`} />
          <span className="font-medium">All Products</span>
        </div>
        <span className={`text-sm rounded-full px-3 py-1 font-semibold ${
          selectedCategory === null 
            ? 'bg-white text-primary shadow-sm' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          {categories.reduce((sum, cat) => sum + cat.count, 0)}
        </span>
      </button>
      
      {/* Divider */}
      <div className="border-t border-gray-200 mb-6"></div>
      
      {/* Main Category Filters */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm text-gray-700 mb-3">JCB Models</h4>
        <DropdownMenu items={mainCategoryItems} />
      </div>
      
      {/* Sub-Category Filters */}
      {selectedCategory && subCategories.length > 0 && (
        <>
          <div className="border-t border-gray-200 mb-6"></div>
          <div className="mb-6">
            <h4 className="font-semibold text-sm text-gray-700 mb-3">Sub-Categories</h4>
            <div className="space-y-2">
              <button
                onClick={() => handleSubCategoryClick(null)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                  selectedSubCategory === null 
                    ? 'bg-accent text-white font-medium' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                }`}
              >
                All Sub-Categories
              </button>
              
              {subCategories.filter(sub => sub.count > 0).map((subCategory) => (
                <button
                  key={subCategory.value}
                  onClick={() => handleSubCategoryClick(subCategory.value)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm flex justify-between items-center ${
                    selectedSubCategory === subCategory.value 
                      ? 'bg-accent text-white font-medium' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  <span>{subCategory.label}</span>
                  <span className={`text-xs rounded-full px-2 py-0.5 ${
                    selectedSubCategory === subCategory.value 
                      ? 'bg-white text-accent' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {subCategory.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      
      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center leading-relaxed">
          Can't find what you're looking for?<br />
          <a href="tel:+918140251789" className="text-accent hover:text-accent-600 font-medium">
            Call us at +91 8140251789
          </a>
        </p>
      </div>
    </div>
  );
};

export default CategoryFilterComponent;