import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Apparel",
      image: "/Apperal.jpeg",
      path: "/products?category=Apparel",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
      path: "/products?category=Accessories",
    },
    {
      name: "Shawls",
      image:
        "https://shahkaar.com/cdn/shop/collections/Timeless-Jamavars-Shahkaar-15668121.jpg?v=1748353096&width=2048",
      path: "/products?category=Shawls",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Large Category */}
          <Link
            to={categories[0].path}
            className="relative group overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[600px] block"
          >
            <img
              src={categories[0].image}
              alt={categories[0].name}
              className="w-full h-full object-cover md:grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-black/20 group-hover:bg-black/10 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-white text-3xl md:text-5xl font-serif mb-4 md:mb-6">
                  {categories[0].name}
                </h3>
                <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.4em] border-b border-white/60 w-fit pb-2 group-hover:border-white group-hover:pr-6 transition-all duration-300">
                  Shop Collection
                </span>
              </motion.div>
            </div>
          </Link>

          {/* Right Small Categories */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {categories.slice(1).map((cat, idx) => (
              <Link
                key={idx}
                to={cat.path}
                className="relative group overflow-hidden flex-grow min-h-[280px] md:min-h-0 block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover md:grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-black/20 group-hover:bg-black/10 transition-all duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <h3 className="text-white text-2xl md:text-3xl font-serif mb-3 md:mb-4">
                      {cat.name}
                    </h3>
                    <span className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] border-b border-white/60 w-fit pb-2 group-hover:border-white group-hover:pr-4 transition-all duration-300">
                      Explore
                    </span>
                  </motion.div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
