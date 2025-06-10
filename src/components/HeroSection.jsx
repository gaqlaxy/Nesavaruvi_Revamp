import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef();
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Initial animation for text elements
    gsap.from(heroRef.current.children, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
      },
    });

    // Continuous floating animation
    gsap.to(buttonRefs.current, {
      y: 10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.from(".hero-image", {
      y: 100,
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-screen grid md:grid-cols-2 sm:grid-cols-1 relative overflow-hidden"
    >
      {/* Left Hero Item */}
      <div className="relative group h-screen md:h-screen">
        <div className="absolute inset-0 bg-[url('/hero1.jpg')] bg-cover bg-center transform transition-transform duration-700 " />

        <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Summer Collection
            </h2>
            <div className="relative inline-block">
              <button
                ref={(el) => (buttonRefs.current[0] = el)}
                className="bg-white relative text-black px-8 py-3 rounded-full font-medium overflow-hidden group-hover:pr-12 transition-all duration-300"
              >
                <span className="inline-block">Explore Now</span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Hero Item */}
      <div className="relative group h-screen md:h-screen">
        <div className="absolute inset-0 bg-[url('/hero2.jpg')] bg-cover bg-center transform transition-transform duration-700" />

        <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-8">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              New Arrivals
            </h2>
            <div className="relative inline-block">
              <button
                ref={(el) => (buttonRefs.current[1] = el)}
                className="bg-white relative text-black px-8 py-3 rounded-full font-medium overflow-hidden group-hover:pr-12 transition-all duration-300"
              >
                <span className="inline-block">Discover More</span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
