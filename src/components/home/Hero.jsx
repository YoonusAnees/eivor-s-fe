import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to play the video on mount to ensure it works on mobile browsers
    const playVideo = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Autoplay was prevented, waiting for user interaction:", error);
          });
        }
      }
    };

    playVideo();
    // Some mobile browsers need an extra nudge
    window.addEventListener("touchstart", playVideo, { once: true });
    return () => window.removeEventListener("touchstart", playVideo);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:h-[90vh] flex items-center overflow-hidden bg-neutral-900">
      {/* Background Video/Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/Apperal.jpeg"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          onError={(e) => console.log("Video load error:", e)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlays for premium feel and readability */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        
        {/* Subtle gradient for desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-[2] hidden md:block" />
        
        {/* Vertical gradient for mobile to make text pop from bottom if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-[2] md:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/90 mb-4 md:mb-6 block font-bold"
          >
            New Collection 2026
          </motion.span>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light leading-[1.1] mb-6 md:mb-8 text-white">
            The Art of <br />
            <span className="italic font-extralight text-neutral-300">Minimalism</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-lg mb-8 md:mb-10 max-w-md mx-auto md:mx-0 leading-relaxed font-light">
            Discover our latest collection of premium essentials designed for
            the modern individual who values quality and timeless style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              variant="primary" 
              className="!bg-white !text-black hover:!bg-neutral-200 transition-colors px-10 py-4 text-xs tracking-widest"
            >
              Shop Collection
            </Button>
            <Button 
              variant="secondary" 
              className="!border-white !text-white hover:!bg-white hover:!text-black transition-all px-10 py-4 text-xs tracking-widest"
            >
              Explore More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator for desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;