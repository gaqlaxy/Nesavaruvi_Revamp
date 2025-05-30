import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(CustomEase);

const images = [
  "./prod1.png",
  "./prod2.png",
  "./prod3.png",
  "./Hero1.jpg",
  "./Hero2.jpg",
  "./Hero3.jpeg",

  //   "https://cdn.cosmos.so/ce9f9fd7-a2a5-476d-9757-481ca01b5861.jpeg",
  //   "https://cdn.cosmos.so/94579ea4-daee-43f9-b778-84156b731361.jpeg",
];

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const wrapperRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // custom ease for blur/scale
    CustomEase.create("smoothBlur", "0.25, 0.1, 0.25, 1");
    gsap.config({ force3D: true });

    const INITIAL_ZOOM = 1.2;

    // show wrappers off-screen and zoom images
    gsap.set(wrapperRefs.current, {
      visibility: "visible",
      clipPath: "inset(100% 0 0 0)",
    });
    gsap.set(imageRefs.current, {
      scale: INITIAL_ZOOM,
      transformOrigin: "center center",
    });

    // build timeline
    const tl = gsap.timeline();

    // image reveal + zoom-back
    wrapperRefs.current.forEach((wrapper, i) => {
      tl.to(
        wrapper,
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          //   duration: 0.65,
          ease: "smoothBlur",
        },
        i > 0 ? "<0.5" : 0
        // i > 0 ? "<0.15" : 0
      );
      tl.to(
        imageRefs.current[i],
        { scale: 1, duration: 1.5, ease: "smoothBlur" },
        // { scale: 1, duration: 0.8, ease: "smoothBlur" },
        "<0"
      );
    });

    // pause a little after last image
    tl.to({}, { duration: 1 });
    // tl.to({}, { duration: 0.3 });

    // fade out the entire container
    tl.to(
      containerRef.current,
      {
        autoAlpha: 0, // opacity to 0 + visibility hidden
        duration: 0.8,
        ease: "power2.inOut",
      },
      ">0"
    );

    // when fade-out finishes, let App know
    tl.call(() => {
      if (typeof onComplete === "function") onComplete();
    });
  }, [onComplete]);

  return (
    <div
      className="preloader-container"
      ref={containerRef}
      style={{ opacity: 1 }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="image-wrapper"
          ref={(el) => (wrapperRefs.current[i] = el)}
        >
          <img
            src={src}
            alt={`Preload ${i + 1}`}
            ref={(el) => (imageRefs.current[i] = el)}
          />
        </div>
      ))}
    </div>
  );
}
