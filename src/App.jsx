import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./page/ProductPage";
import ProductDetail from "./page/ProductDetail";
import CustomerProfile from "./page/CustomerProfile";

function App() {

  return (
    <div>
      <Header />
      <div className="pt-[4.5rem]">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<CustomerProfile />} />
        </Routes>
      </div>
    </div>
  );


}

export default App;
