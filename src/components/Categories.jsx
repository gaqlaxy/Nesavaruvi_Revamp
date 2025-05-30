// components/Categories.jsx
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import categories from "../data/categories.json";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// export default function Categories() {
//   const sectionRef = useRef();
//   const categoryRefs = useRef([]);

//   useGSAP(
//     () => {
//       // Text animation
//       gsap.from(categoryRefs.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//         y: 50,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power3.out",
//       });

//       // Hover animations
//       categoryRefs.current.forEach((category) => {
//         const image = category.querySelector(".category-bg");
//         const content = category.querySelector(".category-content");

//         const tl = gsap.timeline({ paused: true });
//         tl.to(image, {
//           scale: 1.05,
//           duration: 0.6,
//           ease: "power2.out",
//         }).to(
//           content,
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.4,
//             ease: "power2.out",
//           },
//           "-=0.3"
//         );

//         category.addEventListener("mouseenter", () => tl.play());
//         category.addEventListener("mouseleave", () => tl.reverse());
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section ref={sectionRef} className="py-20 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           Shop by Category
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {categories.map((category, index) => (
//             <div
//               key={category.id}
//               ref={(el) => (categoryRefs.current[index] = el)}
//               className="relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden group"
//             >
//               {/* Background Image */}
//               <div
//                 className="category-bg absolute inset-0 bg-cover bg-center transition-transform"
//                 style={{ backgroundImage: `url(${category.image})` }}
//               />

//               {/* Overlay Content */}
//               <div className="category-content absolute inset-0 bg-black/40 flex items-center justify-center p-8">
//                 <div className="text-center space-y-6">
//                   <h3 className="text-4xl md:text-5xl font-bold text-white">
//                     {category.name}
//                   </h3>
//                   <p className="text-lg text-white max-w-md mx-auto">
//                     {category.description}
//                   </p>
//                   <button className="bg-white text-black px-8 py-3 rounded-full font-medium overflow-hidden group-hover:pr-12 transition-all duration-300 relative z-10">
//                     <span className="inline-block transition-transform duration-300">
//                       Explore
//                     </span>
//                     <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                       →
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// DEEEPSSEEEEK
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// export default function Categories() {
//   const sectionRef = useRef();
//   const categoryRefs = useRef([]);
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

//       // Category card animations
//       gsap.from(categoryRefs.current, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center+=200",
//           toggleActions: "play none none reverse",
//         },
//         duration: 0.8,
//         y: 80,
//         opacity: 0,
//         stagger: {
//           each: 0.15,
//           from: "center",
//         },
//         ease: "power2.out",
//       });

//       // Hover animations
//       categoryRefs.current.forEach((category) => {
//         const image = category.querySelector(".category-image");
//         const button = category.querySelector(".category-button");

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

//         category.addEventListener("mouseenter", () => tl.play());
//         category.addEventListener("mouseleave", () => tl.reverse());
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2
//           ref={headingRef}
//           className="text-4xl md:text-5xl font-bold text-center mb-16"
//         >
//           Explore Collections
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {categories.map((category, index) => (
//             <div
//               key={category.id}
//               ref={(el) => (categoryRefs.current[index] = el)}
//               className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="relative h-120">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="category-image w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/30" />
//               </div>

//               <div className="absolute inset-0 flex items-center justify-center p-6">
//                 <div className="text-center">
//                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                     {category.title}
//                   </h3>
//                   <button className="category-button bg-white text-black px-8 py-3 rounded-full opacity-0 translate-y-4">
//                     View Collection
//                     <span className="ml-2">→</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const categories = [
//   {
//     id: 1,
//     title: "Luxury Handbags",
//     image: "/prod1.png",
//   },
//   {
//     id: 2,
//     title: "Designer Jewelry",
//     image: "/prod2.png",
//   },
//   {
//     id: 3,
//     title: "Premium Watches",
//     image: "/prod3.png",
//   },
//   {
//     id: 4,
//     title: "Exclusive Footwear",
//     image: "/prod1.png",
//   },
// ];

// GPT
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const categories = [
//   { id: 1, title: "Kurtis", image: "/prod1.png" },
//   { id: 2, title: "Sarees", image: "/prod2.png" },
//   { id: 3, title: "Lehengas", image: "/prod3.png" },
//   { id: 4, title: "Gowns", image: "/prod2.png" },
//   { id: 5, title: "Blouses", image: "/prod1.png" },
//   { id: 6, title: "Dupattas", image: "/prod3.png" },
// ];

// export default function CategoriesSection() {
//   const sectionRef = useRef();

//   useEffect(() => {
//     gsap.from(sectionRef.current.children, {
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top center",
//       },
//       opacity: 0,
//       y: 50,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Shop by Categories
//         </h2>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
//           {categories.map((cat, index) => (
//             <div
//               key={cat.id}
//               className="relative group h-[80vh] rounded-xl overflow-hidden"
//             >
//               {/* Background Image */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
//                 style={{ backgroundImage: `url(${cat.image})` }}
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-6 text-center">
//                 <h3 className="text-3xl font-bold mb-4">{cat.title}</h3>
//                 <button className="relative inline-block bg-white text-black px-6 py-2 rounded-full font-medium overflow-hidden group-hover:pr-12 transition-all duration-300">
//                   <span className="inline-block">Explore</span>
//                   <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     →
//                   </span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    title: "Kurtis",
    image:
      "https://images.unsplash.com/photo-1667665970118-f55705003914?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  { id: 2, title: "Sarees", image: "/hero3.jpeg" },
  {
    id: 3,
    title: "Lehengas",
    image:
      "https://images.unsplash.com/photo-1746372283841-dbb3838f9935?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  { id: 4, title: "Gowns", image: "/prod2.png" },
  { id: 5, title: "Blouses", image: "/prod1.png" },
  { id: 6, title: "Dupattas", image: "/prod3.png" },
];

export default function CategoriesSection() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Shop by Categories
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className="relative group h-[80vh] rounded-xl overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${cat.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-6 text-center">
                <h3 className="text-3xl font-bold mb-4">{cat.title}</h3>
                <button className="relative inline-block bg-white text-black px-6 py-2 rounded-full font-medium overflow-hidden group-hover:pr-12 transition-all duration-300">
                  <span className="inline-block">Explore</span>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
