// import { useState, useEffect } from "react";
// import styles from "./ThemeCarousel.module.css";

// const Testimonials = () => {
//   // const [isDarkTheme, setIsDarkTheme] = useState(false);

//   // Define card data
//   const cardsData = [
//     {
//       id: 1,
//       color: "color1",
//       title: "Ramya",
//       // subtitle: "Bright ideas wrapped in yellow",
//       description:
//         "A vision powered by creativity and a splash of light-hearted boldness.",
//     },
//     {
//       id: 2,
//       color: "color2",
//       title: "Saranya",
//       // subtitle: "Whimsical and wild at heart",
//       description:
//         "Every design begins with a playful thought and a soft edge of wonder.",
//     },
//     {
//       id: 3,
//       color: "color3",
//       title: "Sarala",
//       // subtitle: "Bold colors for bolder moves",
//       description:
//         "Let your work simmer with energy and burn bright on every screen.",
//     },
//     {
//       id: 4,
//       color: "color4",
//       title: "Roshini",
//       // subtitle: "Deep thoughts in deeper tones",
//       description:
//         "The night speaks in code and creativity, ready for your next idea.",
//     },
//     {
//       id: 5,
//       color: "color5",
//       title: "Ocean Depths",
//       subtitle: "Think deep, build deeper",
//       description:
//         "Where calm logic meets complex flows beneath the surface of design.",
//     },
//     {
//       id: 6,
//       color: "color6",
//       title: "Skyline Pulse",
//       subtitle: "Fast ideas in a faster world",
//       description:
//         "Move with clarity, build with momentum. You're ready for the climb.",
//     },
//   ];

//   // Duplicate cards for infinite scroll
//   const duplicatedCards = [...cardsData, ...cardsData];

//   return (
//     <div className="flex flex-col items-center justify-center gap-4 min-h-screen w-full p-4">
//       <h1 className="text-5xl font-bold mb-4">Hear from our customers</h1>

//       <div className={styles.carousel}>
//         <div className={styles.cardsTrack}>
//           {duplicatedCards.map((card, index) => (
//             <div
//               key={`${card.id}-${index}`}
//               className={`${styles.card} ${
//                 styles[card.color]
//               } transform transition-transform duration-300`}
//             >
//               <h1
//                 className={`${styles.cardHeading} ${
//                   styles[card.color + "Heading"]
//                 }`}
//               >
//                 {card.title}
//               </h1>
//               {/* <h3 className="text-base italic mb-4">{card.subtitle}</h3> */}
//               <p className="text-sm mb-4 pt-12">{card.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import styles from "./ThemeCarousel.module.css";

const Testimonials = () => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardsData = [
    {
      id: 1,
      color: "color1",
      title: "Ramya",
      rating: 5,
      description:
        "A vision powered by creativity and a splash of light-hearted boldness.",
      location: "Chennai",
    },
    {
      id: 2,
      color: "color2",
      title: "Saranya",
      rating: 4,
      description:
        "Every design begins with a playful thought and a soft edge of wonder.",
      location: "Chennai",
    },
    {
      id: 3,
      color: "color3",
      title: "Sarala",
      rating: 5,
      description:
        "Let your work simmer with energy and burn bright on every screen.",
      location: "Chennai",
    },
    {
      id: 4,
      color: "color4",
      title: "Roshini",
      rating: 4,
      description:
        "The night speaks in code and creativity, ready for your next idea.",
      location: "Chennai",
    },
    {
      id: 5,
      color: "color5",
      title: "Ocean Depths",
      rating: 5,
      description:
        "Where calm logic meets complex flows beneath the surface of design.",
      location: "Chennai",
    },
    {
      id: 6,
      color: "color6",
      title: "Skyline Pulse",
      rating: 4,
      description:
        "Move with clarity, build with momentum. You're ready for the climb.",
      location: "Chennai",
    },
    // ...existing card data...
  ];

  const duplicatedCards = [...cardsData, ...cardsData];

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Animation
    const animation = gsap.to(trackRef.current, {
      x: "-50%",
      duration: isMobile ? 15 : 20,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    const handleMouseEnter = () => {
      setIsPaused(true);
      animation.pause();
    };

    const handleMouseLeave = () => {
      setIsPaused(false);
      animation.play();
    };

    const track = trackRef.current;
    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
      animation.kill();
    };
  }, [isMobile]);

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className="text-yellow-400">
        ★
      </span>
    ));
  };

  return (
    <section className="py-12 sm:py-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
          Hear from our customers
        </h2>

        <div className={styles.carousel}>
          <div
            ref={trackRef}
            className={styles.cardsTrack}
            style={{ cursor: isPaused ? "grab" : "auto" }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className={`${styles.card} ${styles[card.color]} 
                  hover:rotate-0 hover:scale-105 group`}
              >
                <h3
                  className={`${styles.cardHeading} ${
                    styles[card.color + "Heading"]
                  }`}
                >
                  {card.title}
                </h3>
                <div className="flex items-center mb-4">
                  {renderStars(card.rating)}
                </div>
                <p className="text-sm sm:text-base mb-4 leading-relaxed">
                  {card.description}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-gray-600">{card.location}</span>
                  <button className="text-sm font-medium group-hover:underline">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
