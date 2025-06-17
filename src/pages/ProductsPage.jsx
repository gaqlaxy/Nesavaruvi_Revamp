// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { gsap } from "gsap";
// import { fetchAllProducts } from "../utils/fetchProducts";
// import { useRef } from "react";

// export default function ProductsPage() {
//   const { addToCart } = useCart();
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const [filtered, setFiltered] = useState([]);

//   const btnRef = useRef();
//   useEffect(() => {
//     fetchAllProducts().then((products) => {
//       console.log("Fetched products:", products);
//       console.log("Current category from URL:", category);
//       const matched = products.filter(
//         (p) => p.category.toLowerCase().trim() === category.toLowerCase().trim()
//       );
//       setFiltered(matched);
//       console.log("Matched products:", matched);
//     });
//   }, [category]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

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
//   // If no products found, return early
//   if (filtered.length === 0) {
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

//   return (
//     <section className="py-16 px-4 max-w-7xl mx-auto pt-[160px] md:pt-[120px]">
//       <h1 className="text-3xl sm:text-4xl font-bold mb-8 capitalize">
//         {category}
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filtered.map((item) => {
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

// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { gsap } from "gsap";
// import { fetchAllProducts } from "../utils/fetchProducts";

// export default function ProductsPage() {
//   const { addToCart } = useCart();
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const [filtered, setFiltered] = useState([]);
//   const [sortOption, setSortOption] = useState("featured");
//   const [priceRange, setPriceRange] = useState([0, 50000]);
//   const containerRef = useRef();
//   const productRefs = useRef([]);

//   useEffect(() => {
//     fetchAllProducts().then((products) => {
//       const matched = products.filter(
//         (p) => p.category.toLowerCase().trim() === category.toLowerCase().trim()
//       );

//       // Apply initial sorting
//       const sorted = sortProducts(matched, sortOption);
//       setFiltered(sorted);
//     });
//   }, [category, sortOption]);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     if (filtered.length) {
//       // Animate products in with stagger effect
//       gsap.from(productRefs.current, {
//         y: 50,
//         opacity: 0,
//         stagger: 0.08,
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 90%",
//         },
//       });
//     }
//   }, [filtered]);

//   const sortProducts = (products, option) => {
//     return [...products].sort((a, b) => {
//       switch (option) {
//         case "price-low":
//           return a.price - b.price;
//         case "price-high":
//           return b.price - a.price;
//         case "newest":
//           return new Date(b.createdAt) - new Date(a.createdAt);
//         default: // featured
//           return b.isFeatured - a.isFeatured || b.rating - a.rating;
//       }
//     });
//   };

//   const handleAddToCart = (e, item) => {
//     e.stopPropagation();

//     // Find the clicked button
//     const button = e.currentTarget;

//     // Animation for add to cart button
//     gsap.fromTo(
//       button,
//       { scale: 1 },
//       {
//         scale: [1.2, 1],
//         duration: 0.3,
//         ease: "back.out(1.7)",
//         color: "#10B981", // Change color to green temporarily
//       }
//     );

//     // Reset color after animation
//     setTimeout(() => {
//       gsap.to(button, { color: "#fff", duration: 0.3 });
//     }, 500);

//     addToCart(item);
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const applyPriceFilter = () => {
//     const filteredProducts = filtered.filter(
//       (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
//     );
//     return filteredProducts;
//   };

//   const filteredProducts = applyPriceFilter();

//   if (!filteredProducts.length) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center py-24 px-4 max-w-3xl mx-auto text-center">
//         <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center mb-8">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-24 w-24 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={1.5}
//               d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//         </div>
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//           No products found in “{category}”
//         </h2>
//         <p className="text-gray-600 mb-8 max-w-md">
//           We couldn't find any products matching your criteria. Try adjusting
//           your filters or browse other categories.
//         </p>
//         <div className="flex flex-wrap gap-4 justify-center">
//           <button
//             onClick={() => {
//               setPriceRange([0, 50000]);
//               setSortOption("featured");
//             }}
//             className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//           >
//             Reset Filters
//           </button>
//           <button
//             onClick={() => navigate(-1)}
//             className="px-6 py-3 border-2 border-black rounded-lg hover:bg-gray-50 transition"
//           >
//             ← Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   //scroll to top on mount

//   return (
//     <div className="max-w-7xl mx-auto px-4 pt-[160px] md:pt-[120px] pb-16">
//       {/* Category Hero */}
//       <div className="mb-16 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
//           {category}
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Discover our curated collection of premium {category.toLowerCase()}{" "}
//           items. Each piece is crafted with attention to detail and quality.
//         </p>
//       </div>

//       {/* Filters and Sorting */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 p-6 bg-white rounded-xl shadow-sm">
//         {/* <div className="w-full md:w-1/3">
//           <h3 className="font-medium mb-2">Price Range</h3>
//           <div className="flex items-center gap-4">
//             <span className="text-gray-600">₹{priceRange[0]}</span>
//             <input
//               type="range"
//               min="0"
//               max="50000"
//               step="500"
//               value={priceRange[1]}
//               onChange={(e) =>
//                 setPriceRange([priceRange[0], Number(e.target.value)])
//               }
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//             />
//             <span className="text-gray-600">₹{priceRange[1]}</span>
//           </div>
//         </div> */}

//         <div className="w-full md:w-1/4">
//           <h3 className="font-medium mb-2">Sort By</h3>
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent"
//           >
//             <option value="featured">Featured</option>
//             <option value="price-low">Price: Low to High</option>
//             <option value="price-high">Price: High to Low</option>
//             <option value="newest">Newest Arrivals</option>
//           </select>
//         </div>

//         <div className="text-gray-600">
//           Showing{" "}
//           <span className="font-semibold">{filteredProducts.length}</span> of{" "}
//           <span className="font-semibold">{filtered.length}</span> products
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div
//         ref={containerRef}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//       >
//         {filteredProducts.map((item, index) => (
//           <div
//             key={item.id}
//             ref={(el) => (productRefs.current[index] = el)}
//             className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
//             onClick={() => navigate(`/product/${item.id}`)}
//           >
//             <div className="relative overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               {/* Quick Add Button */}
//               <button
//                 onClick={(e) => handleAddToCart(e, item)}
//                 className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
//                 </svg>
//                 Add
//               </button>

//               {/* Tag for featured items */}
//               {item.isFeatured && (
//                 <div className="absolute top-4 left-4 bg-[#FB8000] text-white text-xs font-medium px-3 py-1 rounded-full">
//                   Featured
//                 </div>
//               )}
//             </div>

//             <div className="p-5">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
//                   <div className="flex items-center mb-3">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`h-4 w-4 ${
//                           i < Math.floor(item.rating || 4)
//                             ? "text-yellow-400"
//                             : "text-gray-300"
//                         }`}
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                     <span className="text-gray-500 text-sm ml-2">
//                       ({item.rating || 4})
//                     </span>
//                   </div>
//                 </div>
//                 <div className="text-lg font-semibold">₹{item.price}</div>
//               </div>

//               <p className="text-gray-600 text-sm line-clamp-2 mb-4">
//                 {item.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {item.tags?.slice(0, 3).map((tag, i) => (
//                   <span
//                     key={i}
//                     className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { gsap } from "gsap";
import { fetchAllProducts } from "../utils/fetchProducts";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const { category } = useParams();
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const containerRef = useRef();
  const productRefs = useRef([]);

  useEffect(() => {
    fetchAllProducts().then((products) => {
      const matched = products.filter(
        (p) => p.category.toLowerCase().trim() === category.toLowerCase().trim()
      );
      const sorted = sortProducts(matched, sortOption);
      setFiltered(sorted);
    });
  }, [category, sortOption]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (filtered.length) {
      gsap.from(productRefs.current, {
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    }
  }, [filtered]);

  const sortProducts = (products, option) => {
    return [...products].sort((a, b) => {
      switch (option) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return b.isFeatured - a.isFeatured || b.rating - a.rating;
      }
    });
  };

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

  if (!filtered.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-24 px-4 max-w-3xl mx-auto text-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          No products found in “{category}”
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-[160px] md:pt-[120px] pb-16">
      {/* Compact Category Header */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold capitalize">
              {category}
            </h1>
            <p className="text-gray-600 mt-2">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}{" "}
              available
            </p>
          </div>

          {/* Compact Filter Section */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600 hidden sm:inline">Sort by:</span>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 text-sm focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Small tag filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["Popular", "New", "Best Sellers"].map((tag, i) => (
            <button
              key={i}
              className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filtered.map((item, index) => (
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
                className="absolute bottom-4 right-4 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

              {item.isFeatured && (
                <div className="absolute top-4 left-4 bg-[#FB8000] text-white text-xs font-medium px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-base mb-1">{item.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-3 w-3 ${
                          i < Math.floor(item.rating || 4)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-base font-semibold">₹{item.price}</div>
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
        ))}
      </div>
    </div>
  );
}
