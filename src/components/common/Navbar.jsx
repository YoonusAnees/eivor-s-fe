import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Offers', path: '/offers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`glass-navbar transition-all duration-300 ${scrolled ? 'py-4 shadow-sm' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold tracking-widest uppercase">
          Eivor
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-gray-500 ${
                location.pathname === link.path ? 'text-black border-b border-black' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-500 transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="relative hover:text-gray-500 transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-12 flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
