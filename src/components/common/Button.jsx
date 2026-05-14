import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300 uppercase tracking-widest text-sm font-medium';
  const variants = {
    primary: 'bg-black text-white px-8 py-3 hover:bg-neutral-800 disabled:bg-gray-400',
    secondary: 'border border-black text-black px-8 py-3 hover:bg-black hover:text-white disabled:opacity-50',
    ghost: 'text-black px-4 py-2 hover:bg-neutral-100',
    outline: 'border border-gray-200 text-gray-600 px-6 py-2 hover:border-black hover:text-black'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
