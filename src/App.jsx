import React, { useState } from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  const texts = [
    "50% OFF on Select Items",
    "Free Shipping Above Rs.2000",
    "Anniversary Sale: Up to 20% OFF on All Products",
    "Buy 1 Get 1 Free on Selected Products",
  ];

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Marquee texts={texts} />
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}
