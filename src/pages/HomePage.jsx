import React from "react";
import Herosection from "../components/HeroSection";
import TopProducts from "../components/TopProducts";
import Categories from "../components/Categories";
// import About from "../components/About";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import FAQSection from "../components/FAQSection.jsx";

export default function HomePage() {
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
      <Herosection />
      <TopProducts products={products} />
      <Categories />
      {/* <About /> */}
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <Contact />
    </>
  );
}
