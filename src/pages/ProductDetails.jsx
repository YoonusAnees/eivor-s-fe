import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import SectionTitle from '../components/common/SectionTitle';
import ProductCard from '../components/product/ProductCard';
import Loader from '../components/common/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/products/${id}`);
        const data = response.data;
        
        // Backend has 'image' but frontend expects 'images' array for gallery
        const productWithImages = {
          ...data,
          images: data.images || [data.image]
        };
        
        setProduct(productWithImages);

        // Fetch related products
        const productsRes = await api.get('/products');
        const related = productsRes.data
          .filter(p => p.category === data.category && p._id !== id)
          .slice(0, 4);
        setRelatedProducts(related);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <div className="section-padding text-center">Product not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} />
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <SectionTitle title="You May Also Like" subtitle="Complete the Look" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
