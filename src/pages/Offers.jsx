import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../components/product/ProductCard';
import api from '../api/axios';
import Loader from '../components/common/Loader';

const Offers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true);
        const response = await api.get('/products');
        const offers = response.data.filter(p => p.category === 'Offer');
        setProducts(offers);
      } catch (error) {
        console.error('Error fetching offers:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24">
      {/* Offers Hero */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-6 block font-bold">
            Limited Time
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-light mb-8 leading-tight">
            Exclusive <br />
            <span className="italic text-neutral-400">Seasonal Offers</span>
          </h1>
          <p className="text-neutral-500 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Discover exceptional pieces at extraordinary values. Our seasonal selection features curated essentials designed for the discerning individual who values quality and timeless style.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-neutral-800 pb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">Curated Values</p>
              <h2 className="text-3xl font-serif">The Sale Selection</h2>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">{products.length} Items Available</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((p) => (
              <div key={p._id || p.id} className="group">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-neutral-900/50 py-32 px-6 text-center border-t border-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-10 italic text-neutral-300 font-light leading-relaxed">
            "Quality is never an accident; it is always the result of intelligent effort."
          </h2>
          <div className="w-12 h-[1px] bg-neutral-700 mx-auto mb-6"></div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">John Ruskin</p>
        </div>
      </section>
    </div>
  );
};

export default Offers;
