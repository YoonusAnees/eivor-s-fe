import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const ProductFilters = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery, sortOrder, setSortOrder }) => {
  const categories = ['All', 'Apparel', 'Accessories', 'Footwear', 'Outerwear'];

  return (
    <div className="mb-12 space-y-8">
      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="SEARCH COLLECTION" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-b border-gray-200 py-3 pl-8 text-xs uppercase tracking-widest outline-none focus:border-black transition-colors"
          />
        </div>

        <div className="flex items-center space-x-2 border-b border-gray-200 pb-3 group cursor-pointer">
          <span className="text-[10px] uppercase tracking-widest text-gray-400">Sort By:</span>
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-transparent text-xs uppercase tracking-widest font-medium outline-none cursor-pointer"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-x-12 gap-y-4 justify-center border-t border-gray-100 pt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs uppercase tracking-[0.2em] transition-all relative pb-2 ${
              activeCategory === cat ? 'text-black font-bold' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
