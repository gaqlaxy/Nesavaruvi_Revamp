import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import products from "../data/fullProdcuts.json";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function TopProducts() {
  const sectionRef = useRef();
  const productContainerRef = useRef();
  const headingRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const featured = products.filter((p) => p.featured);

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
                      {/* <button
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
                      </button> */}
                      <Link to={`/product/${product.id}`}>
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
                      </Link>
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
