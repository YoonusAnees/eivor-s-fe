import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const About = () => {
  return (
    <div className="min-h-screen mt-10">
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6 block font-medium">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">Crafting a New Legacy of <span className="italic text-gray-400">Luxury</span></h1>
            <p className="text-gray-500 leading-relaxed mb-8">
              Founded in 2024, Eivor was born from a desire to return to the essentials. In a world of fast fashion and fleeting trends, we chose a different path—one defined by meticulous craftsmanship, sustainable materials, and a commitment to timeless aesthetic.
            </p>
            <p className="text-gray-500 leading-relaxed mb-12">
              Every piece in our collection is a testament to this philosophy. We work closely with master artisans who have spent decades perfecting their craft, ensuring that every stitch, every cut, and every finish meets our exacting standards.
            </p>
            <div className="flex gap-12">
              <div>
                <h4 className="text-2xl font-serif mb-2">100%</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Ethical Sourcing</p>
              </div>
              <div>
                <h4 className="text-2xl font-serif mb-2">20+</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Master Artisans</p>
              </div>
            </div>
          </div>
        <div className="aspect-[3/4] overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
    alt="Artisan at work"
    className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
  />
</div>
        </div>
      </section>

      <section className="bg-neutral-soft py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Our Core Values" subtitle="Philosophy" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <h3 className="text-xl font-serif mb-4">Quality First</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We never compromise on materials. From Italian silks to Mongolian cashmere, we source only the finest.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Timeless Design</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our pieces are designed to transcend seasons and years, becoming a permanent part of your legacy.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Conscious Luxury</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Luxury should not come at the cost of the planet. We strive for zero waste and ethical production.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
