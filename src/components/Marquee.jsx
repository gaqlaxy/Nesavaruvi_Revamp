import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Marquee({ texts }) {
  const marqueeRef = useRef();

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "none",
    });
  }, []);

  return (
    <div className="overflow-hidden bg-black text-white py-2">
      <div ref={marqueeRef} className="whitespace-nowrap flex">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="px-4 text-lg font-medium">
            {texts.map((text, index) => (
              <span key={index} className="mx-4">
                ✨ {text} ✨
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

Marquee.defaultProps = {
  texts: [
    "50% OFF on Select Items",
    "Free Shipping Available",
    "Limited Time Offer",
  ],
};
