// // src/pages/ProductDetail.jsx
// import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import products from "../data/fullProdcuts.json";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((p) => String(p.id) === id);

//   useEffect(() => {
//     if (!product) {
//       // Redirect back if not found
//       navigate(-1);
//     }
//   }, [product, navigate]);

//   if (!product) return null;

//   return (
//     <section className="py-16 px-4 max-w-4xl mx-auto">
//       <button
//         onClick={() => navigate(-1)}
//         className="text-teal-600 hover:underline mb-6 block"
//       >
//         ← Back to Products
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//         {/* Image */}
//         <div>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-auto rounded-xl shadow-lg object-cover"
//           />
//         </div>

//         {/* Details */}
//         <div className="space-y-4">
//           <h1 className="text-4xl font-bold">{product.name}</h1>
//           <p className="text-2xl text-gray-800">₹{product.price}</p>
//           <p className="text-gray-700 leading-relaxed">{product.description}</p>

//           {/* Add to Cart or Enquiry */}
//           <button
//             onClick={() => {
//               /* TODO: your addToCart or enquiry logic */
//             }}
//             className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/pages/ProductDetail.jsx
import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import products from "../data/fullProdcuts.json";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { addToCart } = useCart();
  const btnRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === id);
  const [mainImage, setMainImage] = useState(product?.image);
  const containerRef = useRef();
  const handleAdd = () => {
    // pulse animation on button
    gsap.fromTo(
      btnRef.current,
      { scale: 1 },
      { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }
    );
    addToCart(product);
  };

  useEffect(() => {
    if (!product) return navigate(-1);

    // Staggered entrance for image + info
    gsap.from(containerRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, [product, navigate]);

  if (!product) return null;

  const gallery = [product.image, "/prod1.png", "/prod2.png", "/prod3.png"]; // sample extras

  return (
    <section
      className="py-16 px-4 max-w-6xl mx-auto pt-[160px] md:pt-[120px]"
      ref={containerRef}
    >
      <button
        onClick={() => navigate(-1)}
        className="text-teal-600 hover:underline mb-8"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT: Gallery */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex space-x-4 overflow-x-auto">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  mainImage === img
                    ? "border-teal-600"
                    : "border-transparent hover:border-gray-300"
                } transition-colors`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${i}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl text-gray-800">₹{product.price}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <ul className="space-y-2">
            {["Premium fabric", "Handcrafted", "Limited edition"].map(
              (feat, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-3 text-teal-600 text-xl">✔</span>
                  <span>{feat}</span>
                </li>
              )
            )}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              ref={btnRef}
              onClick={handleAdd}
              className="flex-1 bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition"
            >
              Add to Cart
            </button>
            {/* <button
              onClick={() => {
                
              }}
              className="flex-1 border-2 border-teal-600 text-teal-600 py-3 rounded-full hover:bg-teal-600 hover:text-white transition"
            >
              Enquire Now
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
