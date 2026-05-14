import React from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-neutral-100">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => console.log("Video load error:", e)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent z-[2]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white mb-6 block font-bold">
            New Collection 2026
          </span>

          <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight mb-8 text-black">
            The Art of <br />
            <span className="italic">Minimalism</span>
          </h1>

          <p className="text-gray-200 text-lg mb-10 max-w-md leading-relaxed">
            Discover our latest collection of premium essentials designed for
            the modern individual who values quality and timeless style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Shop Collection</Button>
            <Button variant="secondary">Explore More</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;