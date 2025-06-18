// src/pages/ProductDetail.jsx
// import React, { useRef, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { gsap } from "gsap";
// import products from "../data/fullProdcuts.json";
// import { useCart } from "../context/CartContext";

// export default function ProductDetail() {
//   const { addToCart } = useCart();
//   const btnRef = useRef();
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((p) => String(p.id) === id);
//   const [mainImage, setMainImage] = useState(product?.image);
//   const containerRef = useRef();
//   const handleAdd = () => {
//     // pulse animation on button
//     gsap.fromTo(
//       btnRef.current,
//       { scale: 1 },
//       { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }
//     );
//     addToCart(product);
//   };

//   useEffect(() => {
//     if (!product) return navigate(-1);

//     // Staggered entrance for image + info
//     gsap.from(containerRef.current.children, {
//       opacity: 0,
//       y: 30,
//       duration: 0.8,
//       ease: "power3.out",
//       stagger: 0.2,
//     });
//   }, [product, navigate]);

//   if (!product) return null;

//   const gallery = [product.image, "/prod1.png", "/prod2.png", "/prod3.png"]; // sample extras

//   return (
//     <section
//       className="py-16 px-4 max-w-6xl mx-auto pt-[160px] md:pt-[120px]"
//       ref={containerRef}
//     >
//       <button
//         onClick={() => navigate(-1)}
//         className="text-teal-600 hover:underline mb-8"
//       >
//         ← Back
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* LEFT: Gallery */}
//         <div className="space-y-6">
//           <div className="overflow-hidden rounded-2xl shadow-xl">
//             <img
//               src={mainImage}
//               alt={product.name}
//               className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//           <div className="flex space-x-4 overflow-x-auto">
//             {gallery.map((img, i) => (
//               <button
//                 key={i}
//                 onClick={() => setMainImage(img)}
//                 className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
//                   mainImage === img
//                     ? "border-teal-600"
//                     : "border-transparent hover:border-gray-300"
//                 } transition-colors`}
//               >
//                 <img
//                   src={img}
//                   alt={`${product.name} ${i}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Details */}
//         <div className="space-y-6 flex flex-col justify-center">
//           <h1 className="text-4xl font-bold">{product.name}</h1>
//           <p className="text-2xl text-gray-800">₹{product.price}</p>
//           <p className="text-gray-700 leading-relaxed">{product.description}</p>

//           <ul className="space-y-2">
//             {["Premium fabric", "Handcrafted", "Limited edition"].map(
//               (feat, i) => (
//                 <li key={i} className="flex items-center">
//                   <span className="mr-3 text-teal-600 text-xl">✔</span>
//                   <span>{feat}</span>
//                 </li>
//               )
//             )}
//           </ul>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4">
//             <button
//               ref={btnRef}
//               onClick={handleAdd}
//               className="flex-1 bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition"
//             >
//               Add to Cart
//             </button>
//             {/* <button
//               onClick={() => {

//               }}
//               className="flex-1 border-2 border-teal-600 text-teal-600 py-3 rounded-full hover:bg-teal-600 hover:text-white transition"
//             >
//               Enquire Now
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import { useEffect, useRef, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { gsap } from "gsap";
// import { useCart } from "../context/CartContext";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";
// import toast from "react-hot-toast";

// export default function ProductDetail() {
//   const { addToCart } = useCart();
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const btnRef = useRef();
//   const containerRef = useRef();

//   const [product, setProduct] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => setQuantity((q) => q + 1);
//   const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const docRef = doc(db, "products", id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setProduct(data);
//         setMainImage(data.image);
//       } else {
//         navigate(-1);
//       }
//     };

//     fetchProduct();
//   }, [id, navigate]);

//   // const handleAdd = () => {
//   //   gsap.fromTo(
//   //     btnRef.current,
//   //     { scale: 1 },
//   //     { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }
//   //   );
//   //   if (product) addToCart({ id, ...product, qty: quantity });
//   // };

//   const handleAdd = () => {
//     gsap.fromTo(
//       btnRef.current,
//       { scale: 1 },
//       { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }
//     );
//     if (product) {
//       addToCart({ id, ...product }, quantity);
//       toast.success(
//         `${quantity} item${quantity > 1 ? "s" : ""} added to cart!`
//       );
//     }
//   };

//   useEffect(() => {
//     if (product) {
//       gsap.from(containerRef.current.children, {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         ease: "power3.out",
//         stagger: 0.2,
//       });
//     }
//   }, [product]);

//   if (!product) return null;

//   const gallery = [product.image, "/prod1.png", "/prod2.png", "/prod3.png"];

//   return (
//     <section
//       className="py-16 px-4 max-w-6xl mx-auto pt-[160px] md:pt-[120px]"
//       ref={containerRef}
//     >
//       <button
//         onClick={() => navigate(-1)}
//         className="text-teal-600 hover:underline mb-8"
//       >
//         ← Back
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* LEFT: Gallery */}
//         <div className="space-y-6">
//           <div className="overflow-hidden rounded-2xl shadow-xl">
//             <img
//               src={mainImage}
//               alt={product.name}
//               className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//           <div className="flex space-x-4 overflow-x-auto">
//             {gallery.map((img, i) => (
//               <button
//                 key={i}
//                 onClick={() => setMainImage(img)}
//                 className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
//                   mainImage === img
//                     ? "border-teal-600"
//                     : "border-transparent hover:border-gray-300"
//                 } transition-colors`}
//               >
//                 <img
//                   src={img}
//                   alt={`${product.name} ${i}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT: Details */}
//         <div className="space-y-6 flex flex-col justify-center">
//           <h1 className="text-4xl font-bold">{product.name}</h1>
//           <p className="text-2xl text-gray-800">₹{product.price}</p>
//           <p className="text-gray-700 leading-relaxed">{product.description}</p>

//           <ul className="space-y-2">
//             {["Premium fabric", "Handcrafted", "Limited edition"].map(
//               (feat, i) => (
//                 <li key={i} className="flex items-center">
//                   <span className="mr-3 text-teal-600 text-xl">✔</span>
//                   <span>{feat}</span>
//                 </li>
//               )
//             )}
//           </ul>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4">
//             {/* <button
//               ref={btnRef}
//               onClick={handleAdd}
//               className="flex-1 bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition"
//             >
//               Add to Cart
//             </button> */}

//             <div className="flex items-center space-x-4 mt-4">
//               <button
//                 onClick={decrement}
//                 className="px-3 py-1 bg-gray-200 text-black rounded hover:bg-gray-300"
//               >
//                 −
//               </button>
//               <span className="text-lg font-medium">{quantity}</span>
//               <button
//                 onClick={increment}
//                 className="px-3 py-1 bg-gray-200 text-black rounded hover:bg-gray-300"
//               >
//                 +
//               </button>
//             </div>

//             <button
//               ref={btnRef}
//               onClick={() => handleAdd(product, quantity)}
//               className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
//             >
//               Add {quantity} to Cart
//             </button>
//             {/* <button
//               onClick={() => {

//               }}
//               className="flex-1 border-2 border-teal-600 text-teal-600 py-3 rounded-full hover:bg-teal-600 hover:text-white transition"
//             >
//               Enquire Now
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useCart } from "../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";

export default function ProductDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const btnRef = useRef();
  const containerRef = useRef();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProduct(data);
        setMainImage(data.image);
      } else {
        navigate(-1);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleAdd = () => {
    // Animation for add to cart button
    // gsap.fromTo(
    //   btnRef.current,
    //   { scale: 1 },
    //   {
    //     scale: [1.1, 1],
    //     duration: 0.3,
    //     ease: "power2.out",
    //   }
    // );

    // Animation for quantity indicator
    const quantityIndicator = document.querySelector(".quantity-indicator");
    if (quantityIndicator) {
      gsap.fromTo(
        quantityIndicator,
        { scale: 1 },
        {
          scale: [1.3, 1],
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }

    if (product) {
      // Add to cart with quantity as part of the product object
      addToCart({
        id,
        ...product,
        qty: quantity,
      });

      toast.success(
        `${quantity} item${quantity > 1 ? "s" : ""} added to cart!`,
        {
          icon: "🛒",
          style: {
            borderRadius: "10px",
            background: "#fb8000",
            color: "#fff",
          },
        }
      );
    }
  };

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center pt-[160px] md:pt-[120px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );

  // Create gallery images array
  const gallery = [product.image, ...(product.images || [])];

  // Ensure we have at least 4 images for the gallery
  while (gallery.length < 4) {
    gallery.push(product.image);
  }

  return (
    <section
      className="py-16 px-4 max-w-6xl mx-auto pt-[160px] md:pt-[120px]"
      ref={containerRef}
    >
      <button
        onClick={() => navigate(-1)}
        className="flex justify-center items-center text-[#fb8000] hover:text-[#e26f00] transition mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT: Gallery */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[400px] object-cover transform transition-transform duration-500"
            />
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {gallery.slice(0, 4).map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  mainImage === img
                    ? "border-teal-600 scale-105"
                    : "border-gray-200 hover:border-teal-400"
                }`}
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
          <div className="border-b pb-4">
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl text-gray-800 mt-2">₹{product.price}</p>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <ul className="space-y-3">
            {product.features?.map((feat, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 text-teal-600 text-xl mt-1">✓</span>
                <span className="font-medium">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1 w-max">
              <button
                onClick={decrement}
                className={`px-3 py-1 text-xl font-medium rounded ${
                  quantity <= 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="quantity-indicator text-lg font-medium w-10 text-center">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="px-3 py-1 text-xl font-medium text-gray-700 hover:bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              ref={btnRef}
              onClick={handleAdd}
              className="flex items-center justify-center gap-2 bg-[#fb8000] text-white px-6 py-3 rounded-lg hover:bg-[#e26f00] transition w-full sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Cart
            </button>
          </div>

          {/* Additional product info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-lg mb-3">Product Details</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex flex-col">
                <span className="text-gray-600 text-sm">Category</span>
                <span className="font-medium">
                  {product.category || "Fashion"}
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-600 text-sm">Material</span>
                <span className="font-medium">
                  {product.material || "Premium Fabric"}
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-600 text-sm">Care Instructions</span>
                <span className="font-medium">
                  {product.care || "Dry clean only"}
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-600 text-sm">Origin</span>
                <span className="font-medium">{product.origin || "India"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
