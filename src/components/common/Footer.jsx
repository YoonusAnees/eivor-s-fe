import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { 
      name: 'Instagram', 
      path: '#', 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    },
    { 
      name: 'Facebook', 
      path: '#', 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    },
    { 
      name: 'Twitter', 
      path: '#', 
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    }
  ];

  return (
    <footer className="bg-neutral-soft pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold uppercase tracking-widest mb-6">Eivor</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Redefining modern luxury with a commitment to minimal aesthetic and timeless quality.
            </p>
            <div className="flex space-x-5">
              {socialIcons.map((icon) => (
                <a key={icon.name} href={icon.path} className="text-gray-600 hover:text-black cursor-pointer transition-colors">
                  {icon.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Collection</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/products" className="hover:text-black transition-colors">All Products</Link></li>
              <li><Link to="/products?category=new" className="hover:text-black transition-colors">New Arrivals</Link></li>
              <li><Link to="/products?category=featured" className="hover:text-black transition-colors">Featured</Link></li>
              <li><Link to="/offers" className="hover:text-black transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter Shortcut */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe to receive updates and exclusive offers.</p>
            <div className="flex border-b border-black pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent text-sm w-full outline-none"
              />
              <button><Mail size={18} /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400">
          <p>© 2024 Eivor Luxury. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Payment Methods</span>
            <span>Shipping & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
