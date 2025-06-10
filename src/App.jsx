import React, { useState } from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import HomePage from "./pages/HomePage";

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
          <HomePage />

          <Footer />
        </>
      )}
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
