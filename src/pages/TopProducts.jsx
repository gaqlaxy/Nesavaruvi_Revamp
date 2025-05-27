// components/TopProducts.jsx
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
          className="text-4xl md:text-5xl font-bold text-center mb-16"
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
