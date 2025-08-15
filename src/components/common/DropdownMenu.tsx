import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface DropdownItem {
  id: string;
  title: string;
  content: React.ReactNode;
  badge?: number;
  icon?: React.ReactNode;
  specialFeature?: {
    title: string;
    subtitle: string;
  };
}

interface DropdownMenuProps {
  items: DropdownItem[];
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, className = '' }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInsideAnyDropdown = Object.values(dropdownRefs.current).some(
        ref => ref && ref.contains(target)
      );
      
      if (!isClickInsideAnyDropdown) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openDropdown === item.id;
        
        return (
          <div 
            key={item.id}
            ref={el => dropdownRefs.current[item.id] = el}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            {/* Dropdown Header */}
            <button
              onClick={() => toggleDropdown(item.id)}
              className={`w-full text-left px-4 py-3 transition-all duration-300 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset transform hover:scale-[1.02] ${
                isOpen 
                  ? 'bg-primary text-white font-medium shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100 hover:shadow-md'
              }`}
              aria-expanded={isOpen}
              aria-controls={`dropdown-content-${item.id}`}
            >
              <div className="flex items-center flex-1">
                {item.icon && (
                  <span className={`mr-3 ${isOpen ? 'text-white' : 'text-gray-500'}`}>
                    {item.icon}
                  </span>
                )}
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.title}</span>
                  {item.specialFeature && (
                    <span className={`text-xs font-bold ${
                      isOpen ? 'text-accent' : 'text-accent'
                    }`}>
                      {item.specialFeature.title}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className={`text-sm rounded-full px-2 py-0.5 ${
                    isOpen 
                      ? 'bg-white text-primary' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
                
                <span className={`transition-transform duration-400 ease-out ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                } ${isOpen ? 'text-white' : 'text-gray-500'}`}>
                  <ChevronDown size={16} />
                </span>
              </div>
            </button>
            
            {/* Dropdown Content */}
            <div
              id={`dropdown-content-${item.id}`}
              className={`transition-all duration-500 ease-out overflow-hidden ${
                isOpen 
                  ? 'max-h-96 opacity-100 transform translate-y-0' 
                  : 'max-h-0 opacity-0 transform -translate-y-2'
              }`}
              aria-hidden={!isOpen}
            >
              <div className="bg-gray-50 border-t border-gray-200 p-4 animate-fade-in">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;