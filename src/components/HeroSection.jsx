// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useNavigate } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroSection() {
//   const heroRef = useRef();
//   const buttonRefs = useRef([]);
//   const navigate = useNavigate();

//   // Handle button click navigation
//   const handleHeroGridClick = () => {
//     navigate("/heroproducts");
//   };

//   useEffect(() => {
//     // Initial animation for text elements
//     gsap.from(heroRef.current.children, {
//       duration: 1.5,
//       opacity: 0,
//       y: 50,
//       stagger: 0.2,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top center",
//       },
//     });

//     // Continuous floating animation
//     gsap.to(buttonRefs.current, {
//       y: 10,
//       duration: 2,
//       ease: "power1.inOut",
//       yoyo: true,
//       repeat: -1,
//     });
//     gsap.from(".hero-image", {
//       y: 100,
//       scrollTrigger: {
//         trigger: heroRef.current,
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       ref={heroRef}
//       className="h-screen grid md:grid-cols-2 sm:grid-cols-1 relative overflow-hidden"
//     >
//       {/* Left Hero Item */}
//       <div className="relative group h-screen md:h-screen">
//         <div className="absolute inset-0 bg-[url('/hero1.jpg')] bg-cover bg-center transform transition-transform duration-700 " />

//         <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-8">
//           <div className="text-center space-y-6">
//             <h2 className="text-4xl md:text-6xl font-bold text-white">
//               Summer Collection
//             </h2>
//             <div className="relative inline-block">
//               <button
//                 onClick={handleHeroGridClick}
//                 ref={(el) => (buttonRefs.current[0] = el)}
//                 className="bg-white relative text-black px-8 py-3 rounded-full font-medium overflow-hidden group-hover:pr-12 transition-all duration-300"
//               >
//                 <span className="inline-block">Explore Now</span>
//                 <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   →
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Hero Item */}
//       <div className="relative group h-screen md:h-screen">
//         <div className="absolute inset-0 bg-[url('/hero2.jpg')] bg-cover bg-center transform transition-transform duration-700" />

//         <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-8">
//           <div className="text-center space-y-6">
//             <h2 className="text-4xl md:text-6xl font-bold text-white">
//               New Arrivals
//             </h2>
//             <div className="relative inline-block">
//               <button
//                 ref={(el) => (buttonRefs.current[1] = el)}
//                 className="bg-white relative text-black px-8 py-3 rounded-full font-medium overflow-hidden group-hover:pr-12 transition-all duration-300"
//               >
//                 <span className="inline-block">Discover More</span>
//                 <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   →
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(".hero-text > *", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".hero-media", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen pt-[80px] bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4 h-[calc(100vh-80px)]">
        {/* Left: Content */}
        <div className="flex flex-col justify-center hero-text">
          {/* <span className="text-[#FB8000] font-medium tracking-wider mb-4">
            REDEFINE YOUR STYLE
          </span> */}
          {/* <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full mb-6 w-fit animate-pulse">
            <span className="mr-2">🎉</span>
            <span className="font-medium">Special Offer: Up to 30% Off</span>
          </div> */}

          {/* <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Elevate your
            <br />
            <span className="text-[#FB8000]">Wardrobe Story</span>
          </h1> */}

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Limited Time
            <br />
            <span className="text-[#FB8000]">Exclusive Deals</span>
          </h1>

          {/* <p className="text-gray-600 text-lg mb-8 max-w-md">
            Where tradition meets trendsetting designs. Embrace the art of
            self-expression through our handcrafted pieces.
          </p> */}
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Don't miss out on our biggest sale of the season. Premium designs at
            unbeatable prices, available for a limited time.
          </p>

          <div className="flex gap-4 items-center">
            <button
              onClick={() => navigate("/heroproducts")}
              className="px-8 py-4 bg-[#FB8000] text-white rounded-full hover:bg-[#e26f00] transition-all duration-300 flex items-center group"
            >
              Discover Now
              <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>

            <button
              onClick={() => navigate("/#categories")}
              className="px-8 py-4 border-2 border-[#FB8000] text-[#FB8000] rounded-full hover:bg-[#FB8000] hover:text-white transition-all duration-300"
            >
              View Collection
            </button>
          </div>
          {/* <div className="flex gap-4 items-center">
            <button
              onClick={() => navigate("/heroproducts")}
              className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 flex items-center group"
            >
              Shop Sale Now
              <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>

            <button className="px-8 py-4 border-2 border-[#FB8000] text-[#FB8000] rounded-full hover:bg-[#FB8000] hover:text-white transition-all duration-300">
              View All Collections
            </button>
          </div> */}
        </div>

        {/* Right: Media */}
        <div className="hero-media relative flex items-center justify-center">
          {/* For Video */}
          {/* <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-2xl"
            style={{ clipPath: "inset(0 round 2rem)" }}
          >
            <source src="/Nesavaruvi.mp4" type="video/mp4" />
          </video> */}

          {/* For Image */}
          <div className="relative w-full h-full">
            <img
              src="/hero1.jpg"
              alt="Summer Collection"
              className="w-full h-full object-cover rounded-2xl"
              style={{ clipPath: "inset(0 round 2rem)" }}
            />

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <span className="text-sm font-medium">New Arrivals</span>
              <p className="text-[#FB8000] font-bold">50+ Items</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
