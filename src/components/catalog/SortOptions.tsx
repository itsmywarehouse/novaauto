import React from 'react';
import { ChevronDown } from 'lucide-react';

type SortOption = {
  label: string;
  value: string;
};

interface SortOptionsProps {
  options: SortOption[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ 
  options, 
  selectedOption, 
  onSelectOption 
}) => {
  return (
    <div className="relative">
      <select
        value={selectedOption}
        onChange={(e) => onSelectOption(e.target.value)}
        className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDown size={16} />
      </div>
    </div>
  );
};

export default SortOptions;