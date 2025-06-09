import React, { useState } from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import TopProducts from "./pages/TopProducts";
import Categories from "./components/Categories";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  const texts = [
    "50% OFF on Select Items",
    "Free Shipping Above Rs.2000",
    "Anniversary Sale: Up to 20% OFF on All Products",
    "Buy 1 Get 1 Free on Selected Products",
  ];
  const products = [
    {
      id: "1",

      name: "Luxury Handbag",
      price: "299",
      image: "/prod1.png",
      description:
        "Hand-woven pure silk saree with intricate zari work and traditional motifs.",
    },
    {
      id: "2",
      name: "Designer Sunglasses",
      price: "189",
      image: "/prod2.png",
      description:
        "Handcrafted leather wallet with RFID protection and multiple card slots.",
    },
    {
      id: "3",
      name: "Silk Scarf",
      price: "89",
      image: "/prod3.png",
      description:
        "Elegant silk scarf with floral prints, perfect for any occasion.",
    },
    {
      id: "4",
      name: "Gold Bracelet",
      price: "159",
      image: "/prod1.png",
      description:
        "Stunning gold bracelet with intricate designs, a perfect accessory for any outfit.",
    },
  ];

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Marquee texts={texts} />
          <Navbar />
          <HeroSection />
          <TopProducts products={products} />
          <Categories />
          <About />
          <Testimonials />
          <WhyChooseUs />
          <Contact />
          <Footer />
        </>
      )}

      <Routes>
        <Route path="/products/:category" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

// const categories = [
//   {
//     id: 1,
//     title: "Luxury Bags",
//     image: "/images/bags-category.jpg",
//   },
//   {
//     id: 2,
//     title: "Jewelry",
//     image: "/images/jewelry-category.jpg",
//   },
//   {
//     id: 3,
//     title: "Accessories",
//     image: "/images/accessories-category.jpg",
//   },
//   {
//     id: 4,
//     title: "Footwear",
//     image: "/images/footwear-category.jpg",
//   },
// ];
