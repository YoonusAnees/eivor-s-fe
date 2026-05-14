import React, { useState, useEffect } from 'react';
import DashboardCards from '../components/admin/DashboardCards';
import ProductTable from '../components/admin/ProductTable';
import ProductForm from '../components/admin/ProductForm';
import api from '../api/axios';
import { Plus } from 'lucide-react';
import Button from '../components/common/Button';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([
        { _id: '1', name: 'Silk Blouse', price: 240, category: 'Apparel', image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=1974&auto=format&fit=crop', quantity: 45 },
        { _id: '2', name: 'Wool Cashmere Coat', price: 890, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1974&auto=format&fit=crop', quantity: 12 },
        { _id: '3', name: 'Leather Tote Bag', price: 450, category: 'Accessories', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop', quantity: 8 },
        { _id: '4', name: 'Tailored Trousers', price: 180, category: 'Apparel', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop', quantity: 24 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await api.delete(`/products/${id}`);
        setProducts(products.filter(p => (p._id || p.id) !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      let payload = data;
      let headers = { 'Content-Type': 'application/json' };

      if (data.imageFiles && data.imageFiles.length > 0) {
        payload = new FormData();
        Object.keys(data).forEach(key => {
          if (key === 'imageFiles') {
            data.imageFiles.forEach(file => {
              payload.append('images', file);
            });
          } else if (key === 'sizes') {
            payload.append(key, JSON.stringify(data[key]));
          } else {
            payload.append(key, data[key]);
          }
        });
        headers = { 'Content-Type': 'multipart/form-data' };
      }

      if (editingProduct) {
        const response = await api.put(`/products/${editingProduct._id}`, payload, { headers });
        setProducts(products.map(p => p._id === editingProduct._id ? response.data : p));
      } else {
        const response = await api.post('/products', payload, { headers });
        setProducts([response.data, ...products]);
      }
      setShowForm(false);
    } catch (error) {
      console.error('Error saving product:', error);
      const message = error.response?.data?.message || 'Failed to save product.';
      alert(`Error: ${message}`);
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-serif font-bold">Product Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your luxury collection inventory.</p>
        </div>
        <Button onClick={handleAddProduct} variant="primary" className="flex items-center gap-2 !px-6 h-12">
          <Plus size={18} />
          Add Product
        </Button>
      </div>

      <ProductTable 
        products={products} 
        onEdit={handleEditProduct} 
        onDelete={handleDeleteProduct} 
      />

      {showForm && (
        <ProductForm 
          initialData={editingProduct} 
          onSubmit={handleFormSubmit} 
          onClose={() => setShowForm(false)} 
        />
      )}
    </div>
  );
};

export default AdminProducts;
