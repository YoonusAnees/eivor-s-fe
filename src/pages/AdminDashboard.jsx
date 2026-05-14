import React, { useState, useEffect } from 'react';
import DashboardCards from '../components/admin/DashboardCards';
import api from '../api/axios';
import { DollarSign, ShoppingBag, Users, Loader } from 'lucide-react';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const response = await api.get('/admin/stats');
        const stats = response.data;
        
        const productsResponse = await api.get('/products');
        const latestProducts = productsResponse.data.slice(0, 4);

        setData({
          stats: [
            { label: 'Total Products', value: stats.totalProducts, icon: <ShoppingBag size={20} />, trend: '+4.2%', positive: true },
            { label: 'Categories', value: stats.categories, icon: <ShoppingBag size={20} />, trend: '+0%', positive: true },
            { label: 'Out of Stock', value: stats.outOfStock, icon: <ShoppingBag size={20} />, trend: '-1.5%', positive: false },
            { label: 'Revenue (Demo)', value: '$0', icon: <DollarSign size={20} />, trend: '+0%', positive: true },
          ],
          recentActivity: latestProducts.map(p => ({
            id: p._id,
            type: 'Product',
            title: `New Product: ${p.name}`,
            time: new Date(p.createdAt).toLocaleDateString(),
            amount: `$${p.price}`
          }))
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return (
    <div className="p-10 flex items-center justify-center min-h-[400px]">
      <Loader className="animate-spin text-gray-300" size={40} />
    </div>
  );

  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
      </div>

      <DashboardCards stats={data?.stats} />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white p-8 border border-gray-100 rounded-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Sales Performance</h3>
          <div className="h-64 flex items-center justify-center bg-neutral-soft/50 text-gray-400 text-xs uppercase tracking-widest">
            Chart Placeholder (Dynamic Data Ready)
          </div>
        </div>
        <div className="bg-white p-8 border border-gray-100 rounded-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {data?.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-soft flex items-center justify-center">
                    {activity.type === 'Order' ? <ShoppingBag size={14} className="text-charcoal" /> : <Users size={14} className="text-charcoal" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest">{activity.title}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{activity.time}</p>
                  </div>
                </div>
                {activity.amount && <p className="text-xs font-bold">{activity.amount}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
