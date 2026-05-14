import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const result = await login(email, password);
    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.error || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-soft px-6">
      <div className="max-w-md w-full bg-white p-12 shadow-2xl rounded-sm">
        <SectionTitle title="Admin Login" subtitle="Eivor Management" />
        
        {error && (
          <div className="bg-red-50 text-red-500 p-4 text-xs uppercase tracking-widest mb-8 text-center font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border-b border-gray-200 py-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent border-b border-gray-200 py-3 text-sm outline-none focus:border-black transition-colors"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full h-14">
            Sign In
          </Button>
        </form>

        <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-gray-400">
          Need an account? <button onClick={() => navigate('/admin/register')} className="text-black font-bold">Register</button>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
