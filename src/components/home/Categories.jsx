import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
  const categories = [
    { name: 'Apparel', image: '/Apperal.jpeg', size: 'large' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop', size: 'small' },
    { name: 'Footwear', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop', size: 'small' },
  ];

  return (
    <section className="section-padding bg-neutral-soft">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Large Category */}
          <div className="relative group overflow-hidden aspect-square md:aspect-auto">
            <img 
              src={categories[0].image} 
              alt={categories[0].name} 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12">
              <h3 className="text-white text-4xl font-serif mb-4">{categories[0].name}</h3>
              <button className="text-white text-xs uppercase tracking-[0.3em] border-b border-white w-fit pb-1 hover:pr-4 transition-all">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Small Categories */}
          <div className="flex flex-col gap-8">
            {categories.slice(1).map((cat, idx) => (
              <div key={idx} className="relative group overflow-hidden flex-grow min-h-[300px]">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-serif mb-2">{cat.name}</h3>
                  <button className="text-white text-[10px] uppercase tracking-[0.3em] border-b border-white w-fit pb-1 hover:pr-2 transition-all">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
