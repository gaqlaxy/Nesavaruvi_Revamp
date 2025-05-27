// // components/TopProducts.jsx
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TopProducts({ products }) {
  const sectionRef = useRef();
  const productRefs = useRef([]);
  const headingRef = useRef();

  useGSAP(
    () => {
      // Section heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });

      // Product card animations
      gsap.from(productRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=200",
        },
        duration: 0.8,
        y: 80,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.2)",
      });

      //Inside Hover animations

      // Hover animations
      productRefs.current.forEach((product, index) => {
        const image = product.querySelector(".product-image");
        const button = product.querySelector(".quick-shop");

        const tl = gsap.timeline({ paused: true });
        tl.to(image, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        }).to(
          button,
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          "-=0.2"
        );

        product.addEventListener("mouseenter", () => tl.play());
        product.addEventListener("mouseleave", () => tl.reverse());
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className="text-3xl md:text-3xl font-bold text-center mb-16"
        >
          Featured Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[index] = el)}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-80 object-cover transform transition-transform"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>

              <button className="quick-shop absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// // GPT
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const products = [
//   {
//     id: 1,
//     title: "Floral Kurti",
//     price: 999,
//     image: "/prod1.png",
//   },
//   {
//     id: 2,
//     title: "Embroidered Saree",
//     price: 1299,
//     image: "/prod2.png",
//   },
//   {
//     id: 3,
//     title: "Designer Blouse",
//     price: 1099,
//     image: "/prod3.png",
//   },
//   {
//     id: 4,
//     title: "Festive Lehenga",
//     price: 899,
//     image: "/prod1.png",
//   },
// ];

// export default function TopProducts() {
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     cardRefs.current.forEach((card) => {
//       const children = gsap.utils.toArray(
//         card.querySelectorAll(".animate-item")
//       );

//       gsap.from(children, {
//         opacity: 0,
//         y: 40,
//         duration: 0.8,
//         stagger: 0.15,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//         },
//       });
//     });
//   }, []);

//   return (
//     <section className="py-16 bg-white text-black">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold">Top Products</h2>
//         <p className="text-gray-600 mt-2">Most loved by our customers</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
//         {products.map((product, index) => (
//           <div
//             key={product.id}
//             ref={(el) => (cardRefs.current[index] = el)}
//             className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-64 object-cover animate-item"
//             />
//             <div className="p-4 text-center space-y-2">
//               <h3 className="text-xl font-semibold animate-item">
//                 {product.title}
//               </h3>
//               <p className="text-gray-700 animate-item">₹{product.price}</p>
//               <button className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300 animate-item">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
