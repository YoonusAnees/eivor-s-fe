import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <main className={`flex-grow ${isAdmin ? 'bg-neutral-soft/30' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
};

export default MainLayout;
