import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    {subtitle && <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4 block font-medium">{subtitle}</span>}
    <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight">{title}</h2>
    <div className={`h-[1px] bg-black w-24 mt-8 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

export default SectionTitle;
