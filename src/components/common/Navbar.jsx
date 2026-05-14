import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api, { ASSET_URL } from "../../api/axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      fetchProducts();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSearchOpen]);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Search fetch error:", error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredProducts(filtered.slice(0, 6));
    }
  }, [searchQuery, products]);

  useEffect(() => {
    setIsSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Offers", path: "/offers" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const isDarkPage =
    location.pathname === "/" || location.pathname === "/offers";
  const showSolidNav = !isDarkPage || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolidNav
          ? "py-4 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={showSolidNav ? "/siteicon.PNG" : "/eiirswhite.PNG"}
            alt="logo"
            className="h-14 w-auto md:h-16 lg:h-16 transition-all duration-500"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:opacity-70 ${
                showSolidNav
                  ? location.pathname === link.path
                    ? "text-black border-b border-black"
                    : "text-neutral-600"
                  : location.pathname === link.path
                    ? "text-white border-b border-white"
                    : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div
          className={`flex items-center space-x-6 transition-colors duration-500 ${showSolidNav ? "text-black" : "text-white"}`}
        >
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hover:opacity-70 transition-opacity"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          {/* <button className="relative hover:opacity-70 transition-opacity">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className={`absolute -top-1 -right-1 text-[10px] w-4 h-4 flex items-center justify-center rounded-full transition-colors ${
              scrolled ? 'bg-black text-white' : 'bg-white text-black'
            }`}>
              0
            </span>
          </button> */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
              <div className="flex justify-between items-center mb-12">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">
                  Search
                </span>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X size={24} strokeWidth={1} />
                </button>
              </div>

              <div className="relative border-b border-black pb-4 mb-12">
                <input
                  autoFocus
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-3xl md:text-5xl font-serif outline-none placeholder:text-neutral-200"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <Search
                    className="text-neutral-300"
                    size={32}
                    strokeWidth={1}
                  />
                </div>
              </div>

              {filteredProducts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product._id}
                      to={`/products/${product._id}`}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-24 h-32 bg-neutral-100 overflow-hidden flex-shrink-0">
                        <img
                          src={
                            product.image.startsWith("http")
                              ? product.image
                              : `${ASSET_URL}${product.image}`
                          }
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">
                          {product.category}
                        </p>
                        <h4 className="text-base font-medium mb-1 group-hover:underline underline-offset-4">
                          {product.name}
                        </h4>
                        <p className="text-sm text-neutral-600">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {searchQuery && filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-neutral-400">
                    No results found for "{searchQuery}"
                  </p>
                </div>
              )}

              {!searchQuery && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
                      Popular Categories
                    </h5>
                    <div className="flex flex-wrap gap-4">
                      {["Apparel", "Accessories", "Shawls"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSearchQuery(cat)}
                          className="px-6 py-2 border border-neutral-200 rounded-full text-xs hover:border-black hover:bg-black hover:text-white transition-all"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
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
