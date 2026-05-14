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
    <div className="min-h-screen">
      {/* Offers Hero */}
      <section className="bg-charcoal text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6 block font-medium">
            Limited Time
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-8">Exclusive Seasonal Offers</h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Discover exceptional pieces at extraordinary values. Our seasonal selection features curated essentials designed for the discerning individual.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionTitle title="The Sale Selection" subtitle="Curated Values" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p._id || p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-neutral-soft py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif mb-6 italic text-gray-400">"Quality is never an accident; it is always the result of intelligent effort."</h2>
          <p className="text-[10px] uppercase tracking-widest text-gray-400">— John Ruskin</p>
        </div>
      </section>
    </div>
  );
};

export default Offers;
