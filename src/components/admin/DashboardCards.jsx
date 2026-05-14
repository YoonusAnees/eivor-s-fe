import React from 'react';
import { DollarSign, ShoppingBag, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DashboardCards = ({ stats }) => {
  const defaultStats = [
    { label: 'Total Revenue', value: '$0', icon: <DollarSign size={20} />, trend: '0%', positive: true },
    { label: 'Active Orders', value: '0', icon: <ShoppingBag size={20} />, trend: '0%', positive: true },
    { label: 'Total Customers', value: '0', icon: <Users size={20} />, trend: '0%', positive: true },
    { label: 'Avg. Order Value', value: '$0', icon: <DollarSign size={20} />, trend: '0%', positive: true },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {displayStats.map((stat, idx) => (
        <div key={idx} className="bg-white p-6 border border-gray-100 rounded-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-neutral-soft rounded-sm text-charcoal">
              {stat.icon}
            </div>
            <div className={`flex items-center text-[10px] font-bold ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
              {stat.trend}
              {stat.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{stat.label}</p>
          <h3 className="text-2xl font-serif font-bold">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
