import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;