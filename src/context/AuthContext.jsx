import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      const savedAdmin = localStorage.getItem('admin');
      
      if (token) {
        try {
          // Verify token with backend
          const response = await api.get('/auth/profile');
          setAdmin(response.data);
          localStorage.setItem('admin', JSON.stringify(response.data));
        } catch (error) {
          console.error('Token verification failed:', error);
          logout();
        }
      } else if (savedAdmin) {
        setAdmin(JSON.parse(savedAdmin));
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, ...adminData } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('admin', JSON.stringify(adminData));
      setAdmin(adminData);
      return { success: true };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: error.response?.data?.message || 'Login failed. Please check your credentials.' };
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await api.post('/auth/register', { username: name, email, password });
      const { token, ...adminData } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('admin', JSON.stringify(adminData));
      setAdmin(adminData);
      return { success: true };
    } catch (error) {
      console.error('Registration failed:', error);
      return { success: false, error: error.response?.data?.message || 'Registration failed. Please try again.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
