import React from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";

export default function App() {
  const texts = [
    "50% OFF on Select Items",
    "Free Shipping Above Rs.2000",
    "Anniversary Sale: Up to 20% OFF on All Products",
    "Buy 1 Get 1 Free on Selected Products",
  ];
  return (
    <>
      <Marquee texts={texts} />
      <Navbar />
      <HeroSection />
    </>
  );
}
