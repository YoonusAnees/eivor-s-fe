import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl w-full text-center">
        <SectionTitle 
          title={error.status === 404 ? "Lost in Luxury" : "Unexpected Interruption"} 
          subtitle={error.statusText || error.message} 
        />
        
        <div className="mb-12">
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            {error.status === 404 
              ? "The piece you are looking for does not exist in our current collection or has been moved to a new location." 
              : "We encountered a momentary lapse in our service. Our team has been notified and is working to restore the experience."}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gray-400">
            Error Code: {error.status || 'Unknown'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" className="h-14 !px-12">Return to Home</Button>
          </Link>
          <Link to="/products">
            <Button variant="secondary" className="h-14 !px-12">Browse Collection</Button>
          </Link>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Need Assistance?</p>
          <Link to="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">
            Contact Concierge
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
