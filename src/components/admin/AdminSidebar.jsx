import { LayoutDashboard, ShoppingBag, PlusCircle, Users, BarChart3, Settings, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Products', icon: <ShoppingBag size={20} />, path: '/admin/products' },
    { name: 'Add Product', icon: <PlusCircle size={20} />, path: '/admin/add' },
    { name: 'Customers', icon: <Users size={20} />, path: '/admin/customers' },
    { name: 'Analytics', icon: <BarChart3 size={20} />, path: '/admin/analytics' },
  ];

  return (
    <div className="w-64 bg-charcoal text-white h-screen fixed left-0 top-0 flex flex-col p-6 z-[70]">
      <div className="mb-12">
        <h3 className="text-xl font-serif font-bold tracking-widest uppercase">Eivor Admin</h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Management Portal</p>
      </div>

      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center space-x-4 p-3 rounded-sm transition-all duration-300 ${
              location.pathname === item.path ? 'bg-white text-black' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium tracking-wide">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-gray-800 space-y-2">
        <button className="flex items-center space-x-4 p-3 w-full text-gray-400 hover:text-white transition-colors">
          <Settings size={20} />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-4 p-3 w-full text-red-400 hover:text-red-300 transition-colors"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
