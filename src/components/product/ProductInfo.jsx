import React, { useState } from 'react';
import Button from '../common/Button';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "M");

  const sizes = product?.sizes?.length > 0 ? product.sizes : ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4 block font-medium">
          {product?.category || 'Collection'}
        </p>
        <h1 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
          {product?.name || 'Luxury Essential Piece'}
        </h1>
        <p className="text-2xl font-light mb-8">
          Rs {product?.price || '299.00'}
        </p>
        <div className="h-[1px] bg-gray-100 w-full mb-8"></div>
        <p className="text-gray-500 leading-relaxed mb-10 text-sm md:text-base">
          {product?.description || 'Crafted from the finest sustainable materials, this piece embodies our commitment to timeless elegance and superior quality. A versatile addition to any modern wardrobe, designed to last a lifetime.'}
        </p>
        <p className="text-gray-500 leading-relaxed mb-10 text-sm md:text-base">
          Stock: {product?.quantity > 0 ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>

      {/* Size Selection */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] uppercase tracking-widest font-bold">Select Size</span>
          <button className="text-[10px] uppercase tracking-widest text-gray-400 underline underline-offset-4">Size Guide</button>
        </div>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 text-xs border flex items-center justify-center transition-all ${
                selectedSize === size 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-200 text-gray-600 hover:border-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="flex items-center border border-gray-200 h-14 px-4 w-fit">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-black text-gray-400 transition-colors">
            <Minus size={16} />
          </button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-black text-gray-400 transition-colors">
            <Plus size={16} />
          </button>
        </div>
        <Button variant="primary" className="flex-grow h-14">
          Add to Bag
        </Button>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-8 text-[10px] uppercase tracking-widest text-gray-500">
        <button className="flex items-center hover:text-black transition-colors">
          <Heart size={16} className="mr-2" />
          Add to Wishlist
        </button>
        <button className="flex items-center hover:text-black transition-colors">
          <Share2 size={16} className="mr-2" />
          Share
        </button>
      </div>

      {/* Shipping/Returns Small Info */}
      <div className="mt-auto pt-10 grid grid-cols-2 gap-8 border-t border-gray-100">
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2">Shipping</h4>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
            Free Standard Shipping <br /> On All Orders Over LKR 20000
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2">Returns</h4>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
            Complimentary Returns <br /> Within 30 Days
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
