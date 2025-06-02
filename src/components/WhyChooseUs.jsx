// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// export default function WhyChooseUs() {
//   const sectionRef = useRef();
//   const hexGridRef = useRef();
//   const cardsRef = useRef([]);
//   const buttonRef = useRef();

//   useGSAP(
//     () => {
//       // Hexagon grid animation
//       gsap.from(hexGridRef.current.children, {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top center",
//         },
//         scale: 0,
//         opacity: 0,
//         stagger: {
//           amount: 1,
//           grid: "auto",
//           from: "center",
//         },
//         duration: 1,
//         ease: "back.out(1.2)",
//       });

//       // Cards animation
//       gsap.from(cardsRef.current, {
//         scrollTrigger: {
//           trigger: cardsRef.current[0],
//           start: "top 80%",
//         },
//         y: 80,
//         opacity: 0,
//         stagger: 0.15,
//         duration: 0.8,
//         ease: "power2.out",
//       });
//       buttonRef.current.addEventListener("mousemove", (e) => {
//         const rect = buttonRef.current.getBoundingClientRect();
//         gsap.to(buttonRef.current, {
//           x: (e.clientX - rect.left - rect.width / 2) * 0.3,
//           y: (e.clientY - rect.top - rect.height / 2) * 0.3,
//           duration: 0.8,
//           ease: "power2.out",
//         });
//       });

//       buttonRef.current.addEventListener("mouseleave", () => {
//         gsap.to(buttonRef.current, {
//           x: 0,
//           y: 0,
//           duration: 1.2,
//           ease: "elastic.out(1, 0.5)",
//         });
//       });

//       // Floating hover effect
//       cardsRef.current.forEach((card) => {
//         const hoverTL = gsap
//           .timeline({ paused: true })
//           .to(card, {
//             y: -15,
//             rotate: gsap.utils.random(-3, 3),
//             duration: 0.6,
//             ease: "power2.out",
//           })
//           .to(
//             card.querySelector(".hex-icon"),
//             {
//               scale: 1.2,
//               duration: 0.4,
//             },
//             0
//           );

//         card.addEventListener("mouseenter", () => hoverTL.play());
//         card.addEventListener("mouseleave", () => hoverTL.reverse());
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-28 overflow-hidden bg-white"
//     >
//       {/* Hexagon Grid Background */}
//       <div
//         ref={hexGridRef}
//         className="absolute inset-0 flex flex-wrap justify-center opacity-10"
//       >
//         {[...Array(35)].map((_, i) => (
//           <svg key={i} className="w-24 h-24 m-4" viewBox="0 0 100 100">
//             <path
//               d="M50 0L100 25V75L50 100L0 75V25L50 0Z"
//               className="fill-current text-orange-100"
//             />
//           </svg>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
//         <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
//           Why Choose Us?
//           <span className="block mt-4 text-xl font-normal text-orange-600">
//             Crafting Experiences, Not Just Clothes
//           </span>
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               title: "Artisan Heritage",
//               icon: "🎨",
//               text: "Generations of textile wisdom in every stitch",
//             },
//             {
//               title: "Custom Tailoring",
//               icon: "🧵",
//               text: "Personalized fits for your unique style",
//             },
//             {
//               title: "Ethical Practices",
//               icon: "🌿",
//               text: "Sustainable materials, fair wages",
//             },
//             {
//               title: "Instant Support",
//               icon: "💬",
//               text: "Dedicated style consultants 24/7",
//             },
//           ].map((item, index) => (
//             <div
//               key={item.title}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-50 hover:border-orange-100 transition-colors"
//             >
//               <div className="hex-icon mb-6 text-5xl w-fit mx-auto p-4 bg-orange-50 rounded-xl">
//                 {item.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-orange-900">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600">{item.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* Animated Decorative Element */}
//         <div className="mt-20 text-center">
//           <button
//             ref={buttonRef}
//             className="relative inline-block bg-orange-600 text-white px-8 py-4 rounded-full font-bold group overflow-hidden"
//           >
//             <span className="relative z-10">Start Your Style Journey</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  const buttonRef = useRef();

  useGSAP(
    () => {
      // Cards stagger animation
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      // Elastic button animation
      buttonRef.current.addEventListener("mousemove", (e) => {
        const rect = buttonRef.current.getBoundingClientRect();
        gsap.to(buttonRef.current, {
          x: (e.clientX - rect.left - rect.width / 2) * 0.3,
          y: (e.clientY - rect.top - rect.height / 2) * 0.3,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      buttonRef.current.addEventListener("mouseleave", () => {
        gsap.to(buttonRef.current, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        });
      });
    },
    { scope: sectionRef }
  );

  const features = [
    {
      title: "Artisan Excellence",
      description: "Hand-crafted with precision and care by skilled artisans",
      icon: "👑",
      // color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      title: "Sustainable Fashion",
      description: "Eco-friendly materials and ethical production practices",
      icon: "🌱",
      // color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      title: "Custom Fits",
      description: "Tailored to perfection for your unique style",
      icon: "✨",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      title: "24/7 Support",
      description: "Always here to help with your fashion needs",
      icon: "💫",
      // color: "bg-gradient-to-br from-pink-500 to-rose-600",
      color: "bg-gradient-to-br from-[#e67e22] to-[#d35400]",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold ">
            {/* <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600"> */}
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the difference of premium craftsmanship
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group"
            >
              <div
                className={`
                absolute inset-0 rounded-2xl ${feature.color} opacity-90
                transform transition-transform group-hover:scale-105 duration-300
              `}
              />
              <div
                className="relative p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl 
                             transform transition-transform group-hover:translate-y-1 group-hover:-translate-x-1 duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group h-full"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color}
          opacity-90 transform transition-all duration-300 
          group-hover:scale-[1.02] group-hover:opacity-100`}
              />
              <div
                className="relative h-full p-6 rounded-2xl bg-white/95 
          backdrop-blur-sm shadow-xl transition-all duration-300
          group-hover:translate-y-1 group-hover:-translate-x-1"
              >
                <div className="text-4xl mb-4 inline-block bg-white/50 p-3 rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button
            ref={buttonRef}
            className="relative px-8 py-4 bg-[#e67e22] hover:bg-[#d35400] 
                       text-lg  tracking-wide  uppercase
                       text-white rounded-full font-bold shadow-lg 
                       hover:shadow-orange-500/25 transition-shadow duration-300"
          >
            Begin Your Style Journey
          </button>
        </div>
      </div>
    </section>
  );
}
