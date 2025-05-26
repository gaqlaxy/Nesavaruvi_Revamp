import React from "react";
import Marquee from "./components/Marquee";

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
    </>
  );
}
