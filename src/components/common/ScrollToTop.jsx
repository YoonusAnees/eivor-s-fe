import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Navigation scroll to top (on route change)
  useEffect(() => {
    // if you use hashes for section scrolling, don't force top
    if (hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  // 2. Track scroll position for the floating button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 3. Scroll to top function for the button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-black text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:bg-black/80 hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
