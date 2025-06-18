// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { fetchAllProducts } from "../utils/fetchProducts";

// export default function HeroProducts() {
//   const [heroProducts, setHeroProducts] = useState([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     fetchAllProducts().then((data) => {
//       const filtered = data.filter((p) => p.heroproduct);
//       setHeroProducts(filtered);
//       console.log("Hero products fetched:", filtered);
//     });
//   }, []);

//   if (heroProducts.length === 0) {
//     return (
//       <section className="py-16 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8">Hero Products</h1>
//         <p className="text-gray-600">
//           No hero products available at the moment.
//         </p>
//       </section>
//     );
//   }

//   return (
//     <section className="py-16 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8">Hero Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {heroProducts.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-xl shadow-lg p-4 bg-white flex flex-col"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-60 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600 mb-2">{product.category}</p>
//             <p className="font-bold text-lg mb-2">₹{product.price}</p>
//             <p className="text-sm mb-4 flex-1">{product.description}</p>
//             <div className="flex gap-2 mt-auto">
//               <Link
//                 to={`/product/${product.id}`}
//                 className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition text-center"
//               >
//                 View
//               </Link>
//               <button
//                 onClick={() => addToCart(product)}
//                 className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { fetchAllProducts } from "../utils/fetchProducts";

// export default function HeroProducts() {
//   const [heroProducts, setHeroProducts] = useState([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     fetchAllProducts().then((data) => {
//       const filtered = data.filter((p) => p.heroproduct);
//       setHeroProducts(filtered);
//     });
//   }, []);

//   if (heroProducts.length === 0) {
//     return (
//       <section className="py-16 max-w-6xl mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-4 text-center">Special Offers</h1>
//         <div className="text-center py-12">
//           <div className="bg-gray-100 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold mb-2">No current offers</h2>
//           <p className="text-gray-600 mb-6">
//             Check back soon for exclusive deals!
//           </p>
//           <Link
//             to="/"
//             className="px-6 py-2 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-28 max-w-6xl mx-auto px-4">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-3">Special Offers</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Exclusive discounts just for you. Limited time offers on our featured
//           products.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {heroProducts.map((product) => {
//           const discount = product.discount || 20; // Fallback discount if not provided
//           const discountedPrice = product.discount
//             ? product.price * (1 - product.discount / 100)
//             : product.price * 0.8;

//           return (
//             <div
//               key={product.id}
//               className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white flex flex-col transform transition-transform hover:scale-[1.02]"
//             >
//               <div className="relative">
//                 {product.discount && (
//                   <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm z-10">
//                     {product.discount}% OFF
//                   </div>
//                 )}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-60 object-cover"
//                 />
//               </div>

//               <div className="p-6 flex flex-col flex-1">
//                 <div className="flex justify-between items-start mb-2">
//                   <h2 className="text-xl font-semibold">{product.name}</h2>
//                   <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-1 rounded">
//                     {product.category}
//                   </span>
//                 </div>

//                 <div className="mt-2 mb-4">
//                   <div className="flex items-baseline gap-2">
//                     {product.discount && (
//                       <span className="text-gray-500 line-through">
//                         ₹{product.price.toFixed(2)}
//                       </span>
//                     )}
//                     <span className="font-bold text-xl">
//                       ₹{discountedPrice.toFixed(2)}
//                     </span>
//                   </div>
//                   {product.discount && (
//                     <p className="text-green-600 font-medium mt-1">
//                       Save ₹{(product.price - discountedPrice).toFixed(2)}
//                     </p>
//                   )}
//                 </div>

//                 <p className="text-gray-600 text-sm mb-6 flex-1">
//                   {product.description}
//                 </p>

//                 <div className="flex gap-3 mt-auto">
//                   <Link
//                     to={`/product/${product.id}`}
//                     className="flex-1 px-4 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition text-center"
//                   >
//                     View Details
//                   </Link>
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { fetchAllProducts } from "../utils/fetchProducts";
import { gsap } from "gsap";

export default function HeroProducts() {
  const [heroProducts, setHeroProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const containerRef = useRef();
  const productRefs = useRef([]);

  useEffect(() => {
    fetchAllProducts().then((data) => {
      const filtered = data.filter((p) => p.heroproduct);
      setHeroProducts(filtered);
    });
  }, []);

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    const button = e.currentTarget;

    gsap.fromTo(
      button,
      { scale: 1 },
      {
        scale: [1.2, 1],
        duration: 0.3,
        ease: "back.out(1.7)",
        color: "#10B981",
      }
    );

    setTimeout(() => {
      gsap.to(button, { color: "#fff", duration: 0.3 });
    }, 500);

    addToCart(item);
  };

  if (heroProducts.length === 0) {
    return (
      <section className="py-16 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Special Offers</h1>
        <div className="bg-gray-100 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">No current offers</h2>
        <p className="text-gray-600 mb-6">
          Check back soon for exclusive deals!
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
        >
          Continue Shopping
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[120px] pb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Special Offers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Exclusive discounts just for you. Limited time offers on our featured
          products.
        </p>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {heroProducts.map((item, index) => {
          const discount = item.discount || 20;
          const discountedPrice = item.price * (1 - discount / 100);

          return (
            <div
              key={item.id}
              ref={(el) => (productRefs.current[index] = el)}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <button
                  onClick={(e) => handleAddToCart(e, item)}
                  className="absolute bottom-4 right-4 bg-[#fb8000] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </button>

                {item.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {discount}% OFF
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      {item.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(item.rating || 4)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c...z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-base font-semibold text-right">
                    <span className="line-through text-gray-400 text-sm block">
                      ₹{item.price.toFixed(2)}
                    </span>
                    <span className="text-[#fb8000] font-bold">
                      ₹{discountedPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-xs line-clamp-2 mb-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {item.tags?.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 bg-gray-100 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
