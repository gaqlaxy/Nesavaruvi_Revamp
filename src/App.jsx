import React from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

export default function App() {
  const texts = [
    "50% OFF on Select Items",
    "Free Shipping Available",
    "Limited Time Offer",
    "New Arrivals",
  ];
  return (
    <>
      <Marquee texts={texts} />
      <Navbar />
    </>
  );
}
