import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

import { useAuth } from '../context/AuthContext';

const AdminRegister = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }
    
    const result = await register(formData.name, formData.email, formData.password);
    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-soft px-6">
      <div className="max-w-md w-full bg-white p-12 shadow-2xl rounded-sm">
        <SectionTitle title="Admin Register" subtitle="Join Management" />
        
        {error && (
          <div className="bg-red-50 text-red-500 p-4 text-xs uppercase tracking-widest mb-8 text-center font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">Full Name</label>
            <input 
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-200 py-2 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
            <input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-200 py-2 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">Password</label>
            <input 
              name="password"
              type="password" 
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-200 py-2 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">Confirm Password</label>
            <input 
              name="confirmPassword"
              type="password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-200 py-2 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full h-14 mt-4">
            Register
          </Button>
        </form>

        <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-gray-400">
          Already have an account? <button onClick={() => navigate('/admin/login')} className="text-black font-bold">Login</button>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
