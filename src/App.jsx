import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./page/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <div className="pt-[4.5rem]">
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
