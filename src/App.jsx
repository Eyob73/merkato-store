import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './page/Home'
import OrderTracking from './page/OrderTracking'
import ShopingCart from './page/ShopingCart'
import ProductDetail from './page/ProductDetail'
import Checkout from './page/Checkout'
import Login from './page/Login'

// Admin Pages
import AdminLayout from './page/admin/AdminLayout'
import Dashboard from './page/admin/Dashboard'
import ProductManagement from './page/admin/ProductManagement'
import CategoryManagement from './page/admin/CategoryManagement'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/OrderTracking" element={<OrderTracking />} />
          <Route path="/ShopingCart" element={<ShopingCart />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/CheckOut" element={<Checkout />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="categories" element={<CategoryManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );


}

export default App;
