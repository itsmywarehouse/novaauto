import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  initialQuery?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = 'Search for parts or categories...', 
  initialQuery = '',
  inputRef
}) => {
  const [query, setQuery] = useState(initialQuery);
  const localInputRef = useRef<HTMLInputElement>(null);
  // Use passed ref or fallback
  const refToUse = inputRef || localInputRef;

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    if (refToUse.current) {
      refToUse.current.focus();
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative w-full flex items-center"
    >
      <input
        ref={refToUse}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-gray-300 rounded-lg py-3 pl-10 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
      />
      <div className="absolute left-3 text-gray-500">
        <Search size={18} />
      </div>
      
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-12 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>
      )}
      
      <button
        type="submit"
        className="absolute right-3 bg-primary hover:bg-primary-600 text-white rounded p-1 transition-colors"
      >
        <Search size={16} />
      </button>
    </form>
  );
};

export default SearchBar;