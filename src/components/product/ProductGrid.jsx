import React from 'react';
import ProductCard from './ProductCard';
import Loader from '../common/Loader';

const ProductGrid = ({ products, loading }) => {
  if (loading) return <Loader />;

  if (products.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-500 uppercase tracking-widest text-sm">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
      {products.map((product) => (
        <ProductCard key={product._id || product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
