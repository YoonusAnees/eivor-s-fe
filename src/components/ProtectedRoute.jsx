import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from './common/Loader';

const ProtectedRoute = ({ children }) => {
  const { admin, loading } = useAuth();

  if (loading) return <Loader />;

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
