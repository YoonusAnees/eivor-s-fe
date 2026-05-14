import React from 'react';
import { Edit, Trash2, ExternalLink } from 'lucide-react';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-neutral-soft border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Product</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Category</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Price</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Sizes</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Stock</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Status</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {products.map((product) => (
              <tr key={product._id || product.id} className="hover:bg-neutral-soft/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-12 bg-neutral-soft overflow-hidden flex-shrink-0">
                      <img src={product.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">{product.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">ID: {product._id?.substring(0, 8) || product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">{product.category}</span>
                </td>
                <td className="px-6 py-4 font-medium">Rs.{product.price}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {product.sizes?.map(size => (
                      <span key={size} className="text-[9px] bg-neutral-soft px-1.5 py-0.5 border border-gray-100 rounded-sm">
                        {size}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{product.quantity || 45}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-[8px] uppercase tracking-widest font-bold ${
                    (product.quantity || 45) > 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {(product.quantity || 45) > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => onEdit(product)}
                      className="p-2 text-gray-400 hover:text-black hover:bg-white rounded-sm transition-all"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => onDelete(product._id || product.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-sm transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-black hover:bg-white rounded-sm transition-all">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
