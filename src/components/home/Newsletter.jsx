import React from 'react';
import Button from '../common/Button';

const Newsletter = () => {
  return (
    <section className="py-24 bg-charcoal text-white overflow-hidden relative">
      {/* Decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
        NEWSLETTER
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-6 block font-medium">
          Exclusive Access
        </span>
        <h2 className="text-3xl md:text-5xl font-serif mb-10">Join the Eivor Circle</h2>
        <p className="text-gray-400 text-sm md:text-base mb-12 leading-relaxed">
          Subscribe to receive early access to new collections, exclusive event invitations, and curated style insights directly to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="flex-grow bg-transparent border-b border-gray-600 py-3 text-sm focus:border-white outline-none transition-colors uppercase tracking-widest"
          />
          <Button variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-black">
            Subscribe
          </Button>
        </form>
        <p className="text-[10px] text-gray-500 mt-8 uppercase tracking-widest">
          By subscribing, you agree to our Privacy Policy
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
