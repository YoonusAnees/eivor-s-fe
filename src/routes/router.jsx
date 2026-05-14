import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Offers from '../pages/Offers';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import AdminDashboard from '../pages/AdminDashboard';
import AdminProducts from '../pages/AdminProducts';
import AdminLogin from '../pages/AdminLogin';
import AdminRegister from '../pages/AdminRegister';
import ProtectedRoute from '../components/ProtectedRoute';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductDetails /> },
      { path: '/offers', element: <Offers /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/admin/login', element: <AdminLogin /> },
      { path: '/admin/register', element: <AdminRegister /> },
      { 
        path: '/admin', 
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: 'products', element: <AdminProducts /> },
          { path: 'add', element: <AdminProducts /> }, // Same page for now or specialized
        ]
      },
    ],
  },
]);

export default router;
