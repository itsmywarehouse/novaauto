import React from 'react';
import { CategoryFilter } from '../../types';

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
  return (
    <div className="bg-white rounded-lg shadow-custom p-5">
      <h3 className="font-semibold text-lg text-primary mb-4">Categories</h3>
      
      <div className="space-y-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`w-full text-left px-3 py-2 rounded transition-colors flex justify-between items-center ${
            selectedCategory === null 
              ? 'bg-primary text-white font-medium' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>All Products</span>
          <span className="text-sm bg-gray-100 text-gray-700 rounded-full px-2 py-0.5">
            {categories.reduce((sum, cat) => sum + cat.count, 0)}
          </span>
        </button>
        
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onSelectCategory(category.value)}
            className={`w-full text-left px-3 py-2 rounded transition-colors flex justify-between items-center ${
              selectedCategory === category.value 
                ? 'bg-primary text-white font-medium' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span>{category.label}</span>
            <span className={`text-sm rounded-full px-2 py-0.5 ${
              selectedCategory === category.value 
                ? 'bg-white text-primary' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilterComponent;