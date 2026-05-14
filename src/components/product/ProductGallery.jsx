import React, { useState } from "react";
import { ASSET_URL } from "../../api/axios";

const ProductGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  const displayImages = images?.length > 0 ? images : [];

  const getFullUrl = (url) => {
    if (!url) return "";
    return url.startsWith("http")
      ? url
      : `${ASSET_URL}${url}`;
  };

  if (displayImages.length === 0)
    return (
      <div className="aspect-[3/4] w-full rounded-3xl bg-neutral-100 flex items-center justify-center text-gray-400 border border-gray-200">
        No Images
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-8 items-start w-full">
      
      {/* THUMBNAILS */}
      <div className="flex md:flex-col gap-3 md:sticky md:top-24 order-2 md:order-1">
        {displayImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 flex-shrink-0
              w-20 h-24 lg:w-24 lg:h-28
              ${
                activeImage === idx
                  ? "border-black shadow-lg scale-[1.03]"
                  : "border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-400"
              }`}
          >
            <img
              src={getFullUrl(img)}
              alt={`Thumbnail ${idx}`}
              className="w-full h-full object-cover bg-white"
            />
          </button>
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div className="flex-1 w-full order-1 md:order-2">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[32px] border border-gray-200 bg-[#f8f8f8] group">
          
          {/* soft gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-100 opacity-60 pointer-events-none z-10" />

          <img
            src={getFullUrl(displayImages[activeImage])}
            alt="Product Detail"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 p-6 lg:p-10"
          />

       
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;