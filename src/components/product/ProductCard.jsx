import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ASSET_URL } from "../../api/axios";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/products/${product._id || product.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-neutral-soft mb-6 relative">
          <img
            src={
              product.image?.startsWith('http')
                ? product.image
                : `${ASSET_URL}${product.image}`
            }
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {product.featured && (
            <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[8px] uppercase tracking-widest font-bold">
              Featured
            </div>
          )}

          {product.discount && (
            <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[8px] uppercase tracking-widest font-bold">
              -{product.discount}%
            </div>
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
        </div>
      </Link>

      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
            {product.category}
          </p>

          <Link to={`/products/${product._id || product.id}`}>
            <h3 className="text-sm font-medium hover:text-gray-600 transition-colors">
              {product.name}
            </h3>
          </Link>

          {product.quantity > 0 ? (
            <span className="text-green-500 text-xs">In Stock</span>
          ) : (
            <span className="text-red-500 text-xs">Out of Stock</span>
          )}
        </div>

        <div className="text-right">
          <p className="text-sm font-medium">
            {!product.price || product.price === 0 ? (
              <span className="text-gray-400 italic">Coming Soon</span>
            ) : product.discount ? (
              <span className="flex flex-col items-end">
                <span className="line-through text-gray-400 text-xs">
                  Rs.{product.price}
                </span>

                <span>
                  Rs.
                  {(
                    product.price *
                    (1 - product.discount / 100)
                  ).toFixed(2)}
                </span>
              </span>
            ) : (
              <span>Rs.{product.price}</span>
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;