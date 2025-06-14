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
  // FB8000

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] bg-black">
      <div className="overflow-hidden py-2">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex will-change-transform"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="px-4 text-sm font-medium text-white">
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
