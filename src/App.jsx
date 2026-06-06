import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './page/Home'
import OrderTracking from './page/OrderTracking'
import ShopingCart from './page/ShopingCart'
import ProductDetail from './page/ProductDetail'
import Checkout from './page/Checkout'

function App() {

    return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OrderTracking" element={<OrderTracking />} />
        <Route path="/ShopingCart" element={<ShopingCart />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/CheckOut" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </>
  );
 
}

export default App;
