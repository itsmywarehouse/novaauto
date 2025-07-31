import React from 'react';
import { X, Filter, ChevronDown } from 'lucide-react';

interface SubCategoryFilter {
  label: string;
  value: string;
  count: number;
}

interface SubCategoryFiltersProps {
  subCategories: SubCategoryFilter[];
  selectedSubCategories: string[];
  onToggleSubCategory: (subCategory: string) => void;
  onClearAll: () => void;
  selectedCategoryLabel?: string;
  onChangeCategory?: (category: string | null) => void;
}

const SubCategoryFilters: React.FC<SubCategoryFiltersProps> = ({
  subCategories,
  selectedSubCategories,
  onToggleSubCategory,
  onClearAll,
  selectedCategoryLabel,
  onChangeCategory
}) => {
  if (subCategories.length === 0) {
    return null;
  }

  const mainCategories = [
    { label: 'All Products', value: null },
    { label: '🚜 JCB 3DX', value: 'jcb-3dx' },
    { label: '🔧 JCB 3D', value: 'jcb-3d' },
    { label: '⚡ JCB N/M (New Model)', value: 'jcb-nm' },
    { label: '🛠️ Rapid Bearing', value: 'rapid-bearing' }
  ];
  return (
    <div className="bg-white rounded-lg shadow-custom border border-gray-200 p-6 mb-8 mt-8 pt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Filter size={18} className="text-primary mr-2" />
          <h3 className="font-semibold text-gray-800">
            {selectedCategoryLabel ? `${selectedCategoryLabel} - ` : ''}Subcategories
          </h3>
        </div>
        {selectedSubCategories.length > 0 && (
          <button
            onClick={onClearAll}
            className="flex items-center text-gray-500 hover:text-red-500 transition-colors text-sm"
          >
            <X size={16} className="mr-1" />
            Clear All
          </button>
        )}
      </div>

      {/* Main Category Selector */}
      {onChangeCategory && (
        <div className="mb-6 pb-4 border-b border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Change Main Category:
          </label>
          <div className="relative">
            <select
              value={selectedCategoryLabel === 'All Products' ? '' : 
                     selectedCategoryLabel === '🚜 JCB 3DX' ? 'jcb-3dx' :
                     selectedCategoryLabel === '🔧 JCB 3D' ? 'jcb-3d' :
                     selectedCategoryLabel === '⚡ JCB N/M (New Model)' ? 'jcb-nm' : ''}
              onChange={(e) => onChangeCategory(e.target.value || null)}
              className="w-full appearance-none bg-gradient-to-r from-primary to-accent text-white font-semibold border-2 border-primary rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-accent transition-all shadow-lg hover:shadow-xl"
            >
              {mainCategories.map((category) => (
                <option key={category.value || 'all'} value={category.value || ''}>
                  {category.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      )}

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 pt-2 pb-4">
        {subCategories.map((subCategory) => {
          const isSelected = selectedSubCategories.includes(subCategory.value);
          
          return (
            <button
              key={subCategory.value}
              onClick={() => onToggleSubCategory(subCategory.value)}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2 ${
                isSelected
                  ? 'bg-accent text-white border-accent shadow-md hover:bg-accent-600 hover:border-accent-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-accent hover:text-accent hover:shadow-sm'
              }`}
            >
              <span>{subCategory.label}</span>
              {subCategory.count > 0 && (
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                  isSelected 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {subCategory.count}
                </span>
              )}
              {isSelected && (
                <X size={14} className="ml-2 hover:bg-white/20 rounded-full p-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Count */}
      {selectedSubCategories.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {selectedSubCategories.length} subcategor{selectedSubCategories.length === 1 ? 'y' : 'ies'} selected
          </p>
        </div>
      )}
    </div>
  );
};

export default SubCategoryFilters;