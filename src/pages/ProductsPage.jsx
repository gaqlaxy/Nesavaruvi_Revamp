// // src/pages/ProductsPage.jsx
// import React, { useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import products from "../data/fullProdcuts.json";
// import { useCart } from "../context/CartContext";
// import { gsap } from "gsap";

// export default function ProductsPage() {
//   const { addToCart } = useCart();
//   const { category } = useParams();
//   const navigate = useNavigate();

//   const filtered = products.filter(
//     (p) => p.category.toLowerCase() === category.toLowerCase()
//   );

//   if (!filtered.length) {
//     return (
//       <div className="py-24 text-center">
//         <h2 className="text-2xl font-bold mb-4">
//           No products found in “{category}”
//         </h2>
//         <button
//           onClick={() => navigate(-1)}
//           className="text-teal-600 hover:underline"
//         >
//           ← Go Back
//         </button>
//       </div>
//     );
//   }

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <section className="py-16 px-4 max-w-7xl mx-auto pt-[160px] md:pt-[120px]">
//       <h1 className="text-3xl sm:text-4xl font-bold mb-8 capitalize">
//         {category}
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filtered.map((item) => {
//           const btnRef = useRef();
//           const handleAdd = (e) => {
//             e.stopPropagation();
//             gsap.fromTo(
//               btnRef.current,
//               { scale: 1 },
//               { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }
//             );
//             addToCart(item);
//           };
//           return (
//             <div
//               key={item.id}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
//               onClick={() => navigate(`/product/${item.id}`)}
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
//                 <p className="text-gray-600 mb-1">₹{item.price}</p>
//                 <p className="text-sm text-gray-500 mb-4">{item.description}</p>
//                 <button
//                   ref={btnRef}
//                   onClick={handleAdd}
//                   className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { gsap } from "gsap";
import { fetchAllProducts } from "../utils/fetchProducts";
import { useRef } from "react";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const { category } = useParams();
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);

  const btnRef = useRef();
  useEffect(() => {
    fetchAllProducts().then((products) => {
      console.log("Fetched products:", products);
      console.log("Current category from URL:", category);
      const matched = products.filter(
        (p) => p.category.toLowerCase().trim() === category.toLowerCase().trim()
      );
      setFiltered(matched);
      console.log("Matched products:", matched);
    });
  }, [category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!filtered.length) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">
          No products found in “{category}”
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-teal-600 hover:underline"
        >
          ← Go Back
        </button>
      </div>
    );
  }
  // If no products found, return early
  if (filtered.length === 0) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">
          No products found in “{category}”
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-teal-600 hover:underline"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto pt-[160px] md:pt-[120px]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 capitalize">
        {category}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item) => {
          const handleAdd = (e) => {
            e.stopPropagation();
            gsap.fromTo(
              btnRef.current,
              { scale: 1 },
              { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }
            );
            addToCart(item);
          };
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600 mb-1">₹{item.price}</p>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                <button
                  ref={btnRef}
                  onClick={handleAdd}
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
