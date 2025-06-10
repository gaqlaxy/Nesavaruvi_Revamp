// // // components/TopProducts.jsx
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// export default function TopProducts({ products }) {
//   const sectionRef = useRef();
//   const productRefs = useRef([]);
//   const headingRef = useRef();

//   useGSAP(
//     () => {
//       // Section heading animation
//       gsap.from(headingRef.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//         },
//         duration: 1,
//         y: 50,
//         opacity: 0,
//         ease: "power3.out",
//       });

//       // Product card animations
//       gsap.from(productRefs.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center+=200",
//         },
//         duration: 0.8,
//         y: 80,
//         opacity: 0,
//         stagger: 0.15,
//         ease: "back.out(1.2)",
//       });

//       //Inside Hover animations

//       // Hover animations
//       productRefs.current.forEach((product, index) => {
//         const image = product.querySelector(".product-image");
//         const button = product.querySelector(".quick-shop");

//         const tl = gsap.timeline({ paused: true });
//         tl.to(image, {
//           scale: 1.05,
//           duration: 0.3,
//           ease: "power2.out",
//         }).to(
//           button,
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.2,
//             ease: "power2.out",
//           },
//           "-=0.2"
//         );

//         product.addEventListener("mouseenter", () => tl.play());
//         product.addEventListener("mouseleave", () => tl.reverse());
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <h2
//           ref={headingRef}
//           className="text-3xl md:text-3xl font-bold text-center mb-16"
//         >
//           Featured Collections
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               ref={(el) => (productRefs.current[index] = el)}
//               className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image w-full h-80 object-cover transform transition-transform"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//                 <p className="text-gray-600">${product.price}</p>
//               </div>

//               <button className="quick-shop absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// export default function TopProducts({ products }) {
//   const sectionRef = useRef();
//   const productRefs = useRef([]);
//   const headingRef = useRef();

//   useGSAP(
//     () => {
//       // Heading reveal animation
//       gsap.from(headingRef.current, {
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//         },
//         duration: 1,
//         clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
//         ease: "power4.inOut",
//       });

//       // Products stagger animation
//       productRefs.current.forEach((card, i) => {
//         const image = card.querySelector(".product-image");
//         const content = card.querySelector(".product-content");
//         const price = card.querySelector(".product-price");

//         gsap.set(image, { scale: 1.2 });

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//           },
//         });

//         tl.from(card, {
//           opacity: 0,
//           y: 60,
//           duration: 1,
//           ease: "power3.out",
//         })
//           .to(
//             image,
//             {
//               scale: 1,
//               duration: 1.5,
//               ease: "power2.out",
//             },
//             "-=1"
//           )
//           .from(
//             content,
//             {
//               opacity: 0,
//               x: -20,
//               duration: 0.8,
//             },
//             "-=0.5"
//           )
//           .from(
//             price,
//             {
//               opacity: 0,
//               x: 20,
//               duration: 0.8,
//             },
//             "-=0.8"
//           );

//         // Hover effect
//         const hoverTl = gsap.timeline({ paused: true });
//         hoverTl
//           .to(image, {
//             scale: 1.1,
//             duration: 0.5,
//             ease: "power2.out",
//           })
//           .to(
//             content,
//             {
//               y: -10,
//               duration: 0.4,
//             },
//             0
//           )
//           .to(
//             price,
//             {
//               scale: 1.1,
//               duration: 0.4,
//             },
//             0
//           );

//         card.addEventListener("mouseenter", () => hoverTl.play());
//         card.addEventListener("mouseleave", () => hoverTl.reverse());
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section ref={sectionRef} className="py-20 bg-white">
//       <div className="max-w-[1400px] mx-auto px-4">
//         <h2
//           ref={headingRef}
//           className="text-6xl font-bold mb-20 inline-block relative overflow-hidden
//                      bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text text-transparent"
//         >
//           Featured Collections
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               ref={(el) => (productRefs.current[index] = el)}
//               className="group relative flex flex-col"
//             >
//               <div className="relative overflow-hidden aspect-[5/6] mb-6">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
//               </div>

//               <div className="product-content flex-1 space-y-3">
//                 <h3 className="text-xl font-medium tracking-tight">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 line-clamp-2">
//                   {product.description}
//                 </p>
//               </div>

//               <div className="mt-4 flex items-center justify-between">
//                 <span className="product-price text-2xl font-light">
//                   ${product.price}
//                 </span>
//                 <button
//                   className="px-6 py-2 border border-black hover:bg-black hover:text-white
//                                  transition-colors duration-300"
//                 >
//                   View
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function TopProducts() {
//   const sectionRef = useRef();
//   const productContainerRef = useRef();
//   const headingRef = useRef();
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const products = [
//     {
//       id: 1,
//       name: "Luxury Handbag",
//       price: "299",
//       image: "/prod1.png",
//       description: "Hand-woven pure silk saree with intricate zari work.",
//     },
//     {
//       id: 2,
//       name: "Designer Sunglasses",
//       price: "189",
//       image: "/prod2.png",
//       description: "Handcrafted leather wallet with RFID protection.",
//     },
//     {
//       id: 3,
//       name: "Silk Scarf",
//       price: "89",
//       image: "/prod3.png",
//       description: "Elegant silk scarf with floral prints.",
//     },
//     {
//       id: 4,
//       name: "Gold Bracelet",
//       price: "159",
//       image: "/prod1.png",
//       description: "Stunning gold bracelet with intricate designs.",
//     },
//     {
//       id: 5,
//       name: "Crystal Necklace",
//       price: "249",
//       image: "/prod2.png",
//       description: "Exquisite crystal necklace for special occasions.",
//     },
//     {
//       id: 6,
//       name: "Pearl Earrings",
//       price: "129",
//       image: "/prod3.png",
//       description: "Classic pearl earrings with modern design.",
//     },
//     {
//       id: 7,
//       name: "Leather Wallet",
//       price: "79",
//       image: "/prod1.png",
//       description: "Premium leather wallet with multiple compartments.",
//     },
//     {
//       id: 8,
//       name: "Silver Watch",
//       price: "199",
//       image: "/prod2.png",
//       description: "Elegant silver watch with minimalist design.",
//     },
//   ];

//   const slideProducts = (direction) => {
//     const container = productContainerRef.current;
//     const scrollAmount = container.clientWidth * 0.8;
//     const maxScroll = container.scrollWidth - container.clientWidth;
//     const currentScroll = gsap.getProperty(container, "x") || 0;

//     let newScroll;
//     if (direction === "next") {
//       newScroll = Math.min(currentScroll - scrollAmount, -maxScroll);
//     } else {
//       newScroll = Math.min(0, currentScroll + scrollAmount);
//     }

//     gsap.to(container, {
//       x: newScroll,
//       duration: 0.8,
//       ease: "power3.out",
//       onComplete: () => {
//         // Update button states
//         setCanScrollLeft(newScroll < 0);
//         setCanScrollRight(Math.abs(newScroll) < maxScroll);
//       },
//     });
//   };

//   useGSAP(
//     () => {
//       // Heading and text animations
//       gsap.from(headingRef.current.children, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//         },
//       });

//       // Products animation
//       gsap.from(productContainerRef.current.children, {
//         opacity: 0,
//         x: 50,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: productContainerRef.current,
//           start: "top 80%",
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24 bg-gradient-to-b from-white to-neutral-50/50"
//     >
//       <div className="max-w-[1400px] mx-auto px-4">
//         {/* Layout container */}
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left Content */}
//           <div className="w-full lg:w-[40%] lg:sticky lg:top-24 lg:self-start">
//             <div ref={headingRef} className="space-y-6">
//               <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
//                 Our Top
//                 <br />
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500">
//                   Sellers
//                 </span>
//               </h2>
//               <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
//                 Discover our most coveted pieces, handpicked for their timeless
//                 appeal and exceptional craftsmanship. Each item tells a story of
//                 luxury and elegance.
//               </p>
//               <div className="flex gap-4 pt-8">
//                 <button
//                   onClick={() => slideProducts("prev")}
//                   disabled={!canScrollLeft}
//                   className={`group p-3 lg:p-4 border border-black relative overflow-hidden
//                               ${
//                                 !canScrollLeft
//                                   ? "opacity-50 cursor-not-allowed"
//                                   : "hover:text-white"
//                               }`}
//                   aria-label="Previous products"
//                 >
//                   <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//                     ←
//                   </span>
//                   <div
//                     className={`absolute inset-0 bg-black transform scale-x-0 origin-left
//                                   transition-transform duration-300
//                                   ${
//                                     canScrollLeft
//                                       ? "group-hover:scale-x-100"
//                                       : ""
//                                   }`}
//                   />
//                 </button>
//                 <button
//                   onClick={() => slideProducts("next")}
//                   disabled={!canScrollRight}
//                   className={`group p-3 lg:p-4 border border-black relative overflow-hidden
//                               ${
//                                 !canScrollRight
//                                   ? "opacity-50 cursor-not-allowed"
//                                   : "hover:text-white"
//                               }`}
//                   aria-label="Next products"
//                 >
//                   <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//                     →
//                   </span>
//                   <div
//                     className={`absolute inset-0 bg-black transform scale-x-0 origin-left
//                                   transition-transform duration-300
//                                   ${
//                                     canScrollRight
//                                       ? "group-hover:scale-x-100"
//                                       : ""
//                                   }`}
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Products */}
//           <div className="w-full lg:w-[60%] overflow-hidden">
//             <div ref={productContainerRef} className="flex gap-4 lg:gap-6">
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="w-[180px] lg:w-[240px] flex-shrink-0 group"
//                 >
//                   <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition-all duration-500
//                                group-hover:scale-110"
//                     />
//                     <div
//                       className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0
//                                opacity-0 group-hover:opacity-100 transition-all duration-300"
//                     />
//                     <button
//                       className="absolute bottom-4 left-4 right-4 py-2 bg-white/90
//                                  backdrop-blur-sm text-sm font-medium opacity-0 translate-y-4
//                                  transition-all duration-300 group-hover:opacity-100
//                                  group-hover:translate-y-0 hover:bg-black hover:text-white"
//                     >
//                       Quick View
//                     </button>
//                   </div>

//                   <div className="mt-4 space-y-2">
//                     <h3
//                       className="text-base lg:text-lg font-medium group-hover:text-neutral-700
//                                transition-colors duration-300"
//                     >
//                       {product.name}
//                     </h3>
//                     <div className="flex items-center justify-between">
//                       <span className="text-base lg:text-lg font-light">
//                         ${product.price}
//                       </span>
//                       <button
//                         className="relative overflow-hidden px-3 lg:px-4 py-1.5
//                                    bg-transparent border border-black group/btn"
//                       >
//                         <span
//                           className="relative z-10 text-sm transition-colors duration-300
//                                    group-hover/btn:text-white"
//                         >
//                           View
//                         </span>
//                         <div
//                           className="absolute inset-0 bg-black transform scale-x-0 origin-left
//                                    transition-transform duration-300 group-hover/btn:scale-x-100"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import products from "../data/fullProdcuts.json";

gsap.registerPlugin(ScrollTrigger);

export default function TopProducts() {
  const sectionRef = useRef();
  const productContainerRef = useRef();
  const headingRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const featured = products.filter((p) => p.featured);

  // const products = [
  //   {
  //     id: 1,
  //     name: "Luxury Handbag",
  //     price: "299",
  //     image: "/prod1.png",
  //     description: "Hand-woven pure silk saree with intricate zari work.",
  //   },
  //   {
  //     id: 2,
  //     name: "Designer Sunglasses",
  //     price: "189",
  //     image: "/prod2.png",
  //     description: "Handcrafted leather wallet with RFID protection.",
  //   },
  //   {
  //     id: 3,
  //     name: "Silk Scarf",
  //     price: "89",
  //     image: "/prod3.png",
  //     description: "Elegant silk scarf with floral prints.",
  //   },
  //   {
  //     id: 4,
  //     name: "Gold Bracelet",
  //     price: "159",
  //     image: "/prod1.png",
  //     description: "Stunning gold bracelet with intricate designs.",
  //   },
  //   {
  //     id: 5,
  //     name: "Crystal Necklace",
  //     price: "249",
  //     image: "/prod2.png",
  //     description: "Exquisite crystal necklace for special occasions.",
  //   },
  //   {
  //     id: 6,
  //     name: "Pearl Earrings",
  //     price: "129",
  //     image: "/prod3.png",
  //     description: "Classic pearl earrings with modern design.",
  //   },
  //   {
  //     id: 7,
  //     name: "Leather Wallet",
  //     price: "79",
  //     image: "/prod1.png",
  //     description: "Premium leather wallet with multiple compartments.",
  //   },
  //   {
  //     id: 8,
  //     name: "Silver Watch",
  //     price: "199",
  //     image: "/prod2.png",
  //     description: "Elegant silver watch with minimalist design.",
  //   },
  // ];

  // WORKS FINEEEEE
  // const slideProducts = (direction) => {
  //   const container = productContainerRef.current;

  //   // Get screen width to determine if we're on mobile
  //   const isMobile = window.innerWidth < 1024;

  //   // Adjust sizes based on viewport
  //   const productWidth = isMobile ? 180 : 240; // mobile: 180px, desktop: 240px
  //   const gap = isMobile ? 16 : 24; // mobile: 16px, desktop: 24px
  //   const itemsToShow = 2; // Always show 2 items regardless of screen size
  //   const scrollAmount = (productWidth + gap) * itemsToShow;

  //   const maxScroll = container.scrollWidth - container.clientWidth;
  //   const currentScroll = gsap.getProperty(container, "x") || 0;

  //   let newScroll;
  //   if (direction === "next") {
  //     // Ensure we don't scroll past the end
  //     const remainingScroll = maxScroll + currentScroll;
  //     // Use the smaller value between standard scroll amount and remaining space
  //     newScroll = currentScroll - Math.min(scrollAmount, remainingScroll);
  //   } else {
  //     // For previous, keep the same logic
  //     newScroll = Math.min(0, currentScroll + scrollAmount);
  //   }

  //   gsap.to(container, {
  //     x: newScroll,
  //     duration: 1.2,
  //     ease: "power2.inOut",
  //     onComplete: () => {
  //       setCanScrollLeft(newScroll < 0);
  //       setCanScrollRight(Math.abs(newScroll) < maxScroll);
  //     },
  //   });
  // };

  const slideProducts = (direction) => {
    const container = productContainerRef.current;
    const isMobile = window.innerWidth < 1024;

    // Adjust sizes based on viewport
    const productWidth = isMobile ? 180 : 240;
    const gap = isMobile ? 16 : 24;
    const itemsToShow = 2;
    const scrollAmount = (productWidth + gap) * itemsToShow;

    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = gsap.getProperty(container, "x") || 0;

    let newScroll;
    if (direction === "next") {
      // Round to nearest multiple of scrollAmount to prevent partial cards
      const remainingScroll = maxScroll + currentScroll;
      const normalizedScroll =
        Math.round(remainingScroll / scrollAmount) * scrollAmount;
      newScroll = currentScroll - Math.min(scrollAmount, normalizedScroll);
    } else {
      // Round to nearest multiple of scrollAmount for previous scroll
      const normalizedScroll =
        Math.round(currentScroll / scrollAmount) * scrollAmount;
      newScroll = Math.min(0, normalizedScroll + scrollAmount);
    }

    gsap.to(container, {
      x: newScroll,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        setCanScrollLeft(newScroll < 0);
        setCanScrollRight(Math.abs(newScroll) < maxScroll - 1); // Added small threshold
      },
    });
  };
  useGSAP(
    () => {
      // Heading and text animations
      gsap.from(headingRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      // Products animation
      gsap.from(productContainerRef.current.children, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: productContainerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-neutral-50/50"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Layout container */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-24 lg:self-start">
            <div ref={headingRef} className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Our Top Sellers
              </h2>
              <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
                Discover our most coveted pieces, handpicked for their timeless
                appeal and exceptional craftsmanship. Each item tells a story of
                luxury and elegance.
              </p>
              <div className="flex gap-4 pt-8">
                <button
                  onClick={() => slideProducts("prev")}
                  disabled={!canScrollLeft}
                  className={`group p-3 lg:p-4 border border-[#FB8000] relative overflow-hidden
                              ${
                                !canScrollLeft
                                  ? "opacity-50 cursor-not-allowed"
                                  : "hover:text-white"
                              }`}
                  aria-label="Previous products"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    ←
                  </span>
                  <div
                    className={`absolute inset-0 bg-[#FB8000] transform scale-x-0 origin-left 
                                  transition-transform duration-300 
                                  ${
                                    canScrollLeft
                                      ? "group-hover:scale-x-100"
                                      : ""
                                  }`}
                  />
                </button>
                <button
                  onClick={() => slideProducts("next")}
                  disabled={!canScrollRight}
                  className={`group p-3 lg:p-4 border border-[#FB8000] relative overflow-hidden
                              ${
                                !canScrollRight
                                  ? "opacity-50 cursor-not-allowed"
                                  : "hover:text-white"
                              }`}
                  aria-label="Next products"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    →
                  </span>
                  <div
                    className={`absolute inset-0 bg-[#FB8000] transform scale-x-0 origin-left 
                                  transition-transform duration-300 
                                  ${
                                    canScrollRight
                                      ? "group-hover:scale-x-100"
                                      : ""
                                  }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Products */}
          <div className="w-full lg:w-[60%] overflow-hidden">
            <div ref={productContainerRef} className="flex gap-4 lg:gap-6">
              {featured.map((product) => (
                <div
                  key={product.id}
                  className="w-[180px] lg:w-[240px] flex-shrink-0 group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-500 
                               group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 
                               opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    {/* <button
                      className="absolute bottom-4 left-4 right-4 py-2 bg-white/90 
                                 backdrop-blur-sm text-sm font-medium opacity-0 translate-y-4 
                                 transition-all duration-300 group-hover:opacity-100 
                                 group-hover:translate-y-0 hover:bg-black hover:text-white"
                    >
                      Quick View
                    </button> */}
                  </div>

                  <div className="mt-4 space-y-2">
                    <h3
                      className="text-base lg:text-lg font-medium group-hover:text-neutral-700 
                               transition-colors duration-300"
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-base lg:text-lg font-light">
                        ${product.price}
                      </span>
                      <button
                        className="relative overflow-hidden px-3 lg:px-4 py-1.5 
                                   bg-transparent border border-[#FB8000] group/btn"
                      >
                        <span
                          className="relative z-10 text-sm transition-colors duration-300 
                                   group-hover/btn:text-white"
                        >
                          View
                        </span>
                        <div
                          className="absolute inset-0 bg-[#FB8000] transform scale-x-0 origin-left 
                                   transition-transform duration-300 group-hover/btn:scale-x-100"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
