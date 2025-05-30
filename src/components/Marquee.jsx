// import { useRef, useEffect, useState } from "react";
// import gsap from "gsap";

// export default function Marquee({ texts }) {
//   const [hasScrolled, setHasScrolled] = useState(false);

//   const marqueeRef = useRef();
//   // Initialize GSAP animation for the marquee
//   useEffect(() => {
//     gsap.set(marqueeRef.current, { xPercent: 0 });
//   }, []);

//   // GSAP animation for the marquee

//   useEffect(() => {
//     gsap.to(marqueeRef.current, {
//       xPercent: -100,
//       repeat: -1,
//       duration: 20,
//       ease: "none",
//     });
//   }, []);

//   //Sticky marquee effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       gsap.to(marqueeRef.current, {
//         y: scrollTop,
//         ease: "none",
//         overwrite: true,
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (

//     <div className=" overflow-hidden bg-black text-[#e67e22] py-2">
//       <div ref={marqueeRef} className="whitespace-nowrap flex">
//         {[...Array(6)].map((_, i) => (
//           <span key={i} className="px-4 text-lg font-medium">
//             {texts.map((text, index) => (
//               <span key={index} className="mx-4 ">
//                 ✨ {text} ✨
//               </span>
//             ))}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// Marquee.defaultProps = {
//   texts: [
//     "50% OFF on Select Items",
//     "Free Shipping Above Rs.2000",
//     "Anniversary Sale: Up to 20% OFF on All Products",
//     "Buy 1 Get 1 Free on Selected Products",
//   ],
// };

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Marquee({ texts }) {
//   const marqueeRef = useRef();
//   const containerRef = useRef();

//   useEffect(() => {
//     // Create a timeline for the marquee animation
//     const tl = gsap.timeline({
//       repeat: -1,
//       defaults: { ease: "none" },
//     });

//     // Horizontal scrolling animation
//     tl.to(marqueeRef.current, {
//       xPercent: -100,
//       duration: 20,
//     });

//     // ScrollTrigger for keeping marquee visible while scrolling
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       endTrigger: "html",
//       end: "bottom top",
//       pin: true,
//       pinSpacing: false,
//     });

//     // Cleanup
//     return () => {
//       tl.kill();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative z-50">
//       <div className="overflow-hidden bg-black text-[#e67e22] py-2">
//         <div ref={marqueeRef} className="whitespace-nowrap flex">
//           {[...Array(6)].map((_, i) => (
//             <span key={i} className="px-4 text-lg font-medium">
//               {texts.map((text, index) => (
//                 <span key={index} className="mx-4">
//                   ✨ {text} ✨
//                 </span>
//               ))}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Marquee({ texts }) {
//   const marqueeRef = useRef();
//   const containerRef = useRef();

//   useEffect(() => {
//     // Create a timeline for the marquee animation
//     const tl = gsap.timeline({
//       repeat: -1,
//       defaults: { ease: "none" },
//     });

//     // Horizontal scrolling animation
//     tl.to(marqueeRef.current, {
//       xPercent: -100,
//       duration: 20,
//     });

//     // Responsive ScrollTrigger configuration
//     const mediaQuery = window.matchMedia("(max-width: 768px)");

//     const createScrollTrigger = () => {
//       return ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top top",
//         endTrigger: "html",
//         end: "bottom top",
//         pin: true,
//         pinSpacing: false,
//         // Add these properties for mobile
//         pinType: mediaQuery.matches ? "fixed" : "transform",
//         anticipatePin: 1,
//       });
//     };

//     let st = createScrollTrigger();

//     // Handle screen size changes
//     const handleResize = (e) => {
//       st.kill();
//       st = createScrollTrigger();
//     };

//     mediaQuery.addEventListener("change", handleResize);

//     // Cleanup
//     return () => {
//       tl.kill();
//       st.kill();
//       mediaQuery.removeEventListener("change", handleResize);
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative z-[999] will-change-transform">
//       <div className="overflow-hidden bg-black text-[#e67e22] py-2 fixed w-full">
//         <div ref={marqueeRef} className="whitespace-nowrap flex">
//           {[...Array(6)].map((_, i) => (
//             <span key={i} className="px-4 text-lg font-medium">
//               {texts.map((text, index) => (
//                 <span key={index} className="mx-4">
//                   ✨ {text} ✨
//                 </span>
//               ))}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Marquee({ texts }) {
  const marqueeRef = useRef();

  useEffect(() => {
    // Create a timeline for continuous horizontal scrolling
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    // Simple horizontal scrolling animation
    tl.to(marqueeRef.current, {
      xPercent: -100,
      duration: 20,
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] bg-black">
      <div className="overflow-hidden py-2">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex will-change-transform"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="px-4 text-lg font-medium text-[#e67e22]">
              {texts.map((text, index) => (
                <span key={index} className="mx-4">
                  ✨ {text} ✨
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
