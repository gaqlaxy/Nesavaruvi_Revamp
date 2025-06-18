// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function WhyChooseUs() {
//   // Refs
//   const videoRef = useRef();
//   const featuresRef = useRef([]);
//   const ctaButtonRef = useRef();

//   useEffect(() => {
//     // Video parallax
//     gsap.to(videoRef.current, {
//       scale: 1.05,
//       scrollTrigger: {
//         trigger: videoRef.current,
//         scrub: true,
//       },
//       ease: "none",
//     });

//     // Video play/pause on scroll
//     const st = ScrollTrigger.create({
//       trigger: videoRef.current,
//       start: "top bottom",
//       end: "bottom top",
//       onEnter: () => videoRef.current.play(),
//       onLeave: () => videoRef.current.pause(),
//       onEnterBack: () => videoRef.current.play(),
//       onLeaveBack: () => videoRef.current.pause(),
//     });

//     // Features animation
//     gsap.from(featuresRef.current, {
//       scrollTrigger: {
//         trigger: featuresRef.current[0]?.parentElement,
//         start: "top 80%",
//       },
//       y: 40,
//       opacity: 0,
//       stagger: 0.15,
//       duration: 0.7,
//       ease: "power3.out",
//     });

//     // CTA button elastic effect
//     const btn = ctaButtonRef.current;
//     const handleMouseMove = (e) => {
//       const rect = btn.getBoundingClientRect();
//       gsap.to(btn, {
//         x: (e.clientX - rect.left - rect.width / 2) * 0.3,
//         y: (e.clientY - rect.top - rect.height / 2) * 0.3,
//         duration: 0.8,
//         ease: "power2.out",
//       });
//     };
//     const handleMouseLeave = () => {
//       gsap.to(btn, {
//         x: 0,
//         y: 0,
//         duration: 1.2,
//         ease: "elastic.out(1, 0.5)",
//       });
//     };
//     btn.addEventListener("mousemove", handleMouseMove);
//     btn.addEventListener("mouseleave", handleMouseLeave);

//     // Cleanup
//     return () => {
//       st.kill();
//       btn.removeEventListener("mousemove", handleMouseMove);
//       btn.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   const features = [
//     {
//       icon: "👑",
//       title: "Artisan Excellence",
//       description: "Hand-crafted with precision and care by skilled artisans",
//       color: "bg-gradient-to-br from-amber-500 to-orange-600",
//     },
//     {
//       icon: "🌱",
//       title: "Sustainable Fashion",
//       description: "Eco-friendly materials and ethical production practices",
//       color: "bg-gradient-to-br from-amber-500 to-orange-600",
//     },
//     {
//       icon: "✨",
//       title: "Custom Fits",
//       description: "Tailored to perfection for your unique style",
//       color: "bg-gradient-to-br from-amber-500 to-orange-600",
//     },
//     {
//       icon: "💫",
//       title: "24/7 Support",
//       description: "Always here to help with your fashion needs",
//       color: "bg-gradient-to-br from-[#FB8000] to-[#d35400]",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fff7f0] relative overflow-hidden h-screen ">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Video Section */}
//           <div className="relative rounded-2xl overflow-hidden shadow-lg">
//             <div className="aspect-square">
//               <video
//                 ref={videoRef}
//                 src="./Nesavaruvi.mp4"
//                 type="video/mp4"
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//                 aria-label="About our brand"
//               />
//             </div>
//             <div className="absolute inset-0 border-8 border-[#FB8000]/10 rounded-2xl pointer-events-none" />
//           </div>

//           {/* Content Section */}
//           <div className="space-y-8">
//             {/* Features Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (featuresRef.current[index] = el)}
//                   className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
//                 >
//                   <div
//                     className={`absolute inset-0 rounded-xl ${feature.color} opacity-10`}
//                   />
//                   <div className="relative z-10 mb-4 text-3xl">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-lg font-semibold text-[#FB8000] mb-2 relative z-10">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-700 relative z-10">
//                     {feature.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="pt-2 flex justify-center">
//               <button
//                 ref={ctaButtonRef}
//                 className="bg-[#FB8000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d35400] transition-colors shadow-lg"
//                 aria-label="Begin Your Style Journey"
//               >
//                 Begin Your Style Journey
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef();
  const sectionRef = useRef();

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Video parallax
    gsap.to(videoRef.current, {
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      scale: 1.03,
      ease: "none",
    });

    // Feature items animation
  }, []);

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#FB8000]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
          />
        </svg>
      ),
      title: "Artisan Excellence",
      description: "Hand-crafted with precision by skilled artisans",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#FB8000]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Sustainable Fashion",
      description: "Eco-friendly materials and ethical practices",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#FB8000]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 22V12h6v10"
          />
        </svg>
      ),
      title: "Perfect Fit Guarantee",
      description: "Tailored to perfection for your unique style",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#FB8000]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description: "Always here to help with your fashion needs",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-sm uppercase tracking-widest text-gray-500 mb-4">
            Why We Stand Apart
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Crafted with{" "}
            <span className="font-medium text-[#fb8000]">Intention</span>,<br />
            Designed for <span className="font-medium text-[#fb8000]">You</span>
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="relative aspect-square overflow-hidden">
            <video
              ref={videoRef}
              src="./Nesavaruvi.mp4"
              type="video/mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              aria-label="About our brand"
              autoPlay
            />

            {/* Play/Pause button */}
            <button
              onClick={toggleVideo}
              className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>

            {/* Video label */}
            <div className="absolute top-6 left-6">
              <div className="bg-[#FB8000] text-white px-4 py-1 text-sm tracking-wide">
                Our Craft
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="flex flex-col h-full">
            <div className="features-grid grid grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item p-6 bg-gray-50 border border-gray-100 rounded-lg hover:bg-white transition-all"
                >
                  <div className="flex flex-col">
                    <div className="text-gray-700 mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-auto border-t border-gray-100 pt-10">
              <div className="max-w-md">
                <h3 className="text-xl font-light text-gray-900 mb-4">
                  Experience the difference that thoughtful design makes
                </h3>
                <button
                  className="group w-full py-4 border border-gray-900 text-gray-900 hover:bg-[#FB8000] hover:text-white transition-all duration-300 flex items-center justify-between px-6"
                  aria-label="Begin Your Style Journey"
                >
                  <span className="text-lg tracking-wide">
                    Discover Our Collections
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
