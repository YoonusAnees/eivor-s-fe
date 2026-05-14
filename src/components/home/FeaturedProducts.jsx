import React, { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import api from '../../api/axios';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await api.get('/products');
        const featured = response.data.filter(p => p.featured).slice(0, 4);
        setProducts(featured);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  if (loading) return (
    <div className="h-64 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (products.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Curated Essentials" 
          subtitle="Featured Collection" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link to={`/products/${product._id}`} key={product._id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-neutral-soft mb-6 relative">
                <img 
                  src={product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 uppercase text-[10px] tracking-widest font-medium">
                  Quick View
                </button>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">{product.category}</p>
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600">${product.price}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/products">
            <Button variant="secondary">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
