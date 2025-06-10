import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import categories from "../data/fullProdcuts.json";

gsap.registerPlugin(ScrollTrigger);

// const categories = [
//   {
//     id: 1,
//     title: "Kurtis",
//     image:
//       "https://images.unsplash.com/photo-1667665970118-f55705003914?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   { id: 2, title: "Sarees", image: "/hero3.jpeg" },
//   {
//     id: 3,
//     title: "Lehengas",
//     image:
//       "https://images.unsplash.com/photo-1746372283841-dbb3838f9935?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
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

//         <div className="grid sm:grid-cols-1 md:grid-cols-2">
//           {categories.map((cat, index) => (
//             <div
//               key={cat.id}
//               className="relative group h-[100vh]  overflow-hidden"
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

export default function CategoriesSection() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      opacity: 0,
      y: 10,
      stagger: 0.2,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Shop by Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className="relative group h-[200px] sm:h-[300px] md:h-[100vh] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${cat.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 sm:px-6 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                  {cat.title}
                </h3>
                <button className="relative inline-block bg-white text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium overflow-hidden group-hover:pr-8 sm:group-hover:pr-12 transition-all duration-300">
                  <span className="inline-block">Explore</span>
                  <span className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
