import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const AdminTopbar = ({ title }) => {
  return (
    <div className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-[60]">
      <h2 className="text-xl font-serif">{title}</h2>

      <div className="flex items-center space-x-8">
        <div className="relative group hidden md:block">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="SEARCH RECORDS" 
            className="bg-transparent border-b border-transparent py-2 pl-6 text-[10px] uppercase tracking-widest outline-none focus:border-black transition-colors w-48"
          />
        </div>

        <button className="text-gray-400 hover:text-black transition-colors relative">
          <Bell size={20} strokeWidth={1.5} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-black rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 bg-neutral-soft rounded-full flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-white transition-all">
            <User size={20} strokeWidth={1.5} />
          </div>
          <div className="hidden lg:block">
            <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Admin User</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
