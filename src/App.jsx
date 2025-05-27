import React from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import TopProducts from "./pages/TopProducts";

export default function App() {
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
    },
    {
      id: "2",
      name: "Designer Sunglasses",
      price: "189",
      image: "/prod2.png",
    },
    {
      id: "3",
      name: "Silk Scarf",
      price: "89",
      image: "/prod3.png",
    },
    {
      id: "4",
      name: "Gold Bracelet",
      price: "159",
      image: "/prod1.png",
    },
  ];
  return (
    <>
      <Marquee texts={texts} />
      <Navbar />
      <HeroSection />
      <TopProducts products={products} />
    </>
  );
}
