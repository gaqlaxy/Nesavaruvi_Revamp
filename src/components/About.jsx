import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const videoRef = useRef();
  const textBlockRef = useRef();
  const highlightsRef = useRef([]);

  useEffect(() => {
    // Video parallax zoom (unchanged)
    gsap.to(videoRef.current, {
      scale: 1.05,
      scrollTrigger: {
        trigger: videoRef.current,
        scrub: true,
      },
      ease: "none",
    });

    // Play/pause on visibility
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top bottom", // when top of video hits bottom of viewport
      end: "bottom top", // when bottom of video hits top of viewport
      onEnter: () => videoRef.current.play(),
      onLeave: () => videoRef.current.pause(),
      onEnterBack: () => videoRef.current.play(),
      onLeaveBack: () => videoRef.current.pause(),
    });

    // Text block fade & slide (unchanged)
    gsap.from(textBlockRef.current, {
      scrollTrigger: {
        trigger: textBlockRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Staggered highlights (unchanged)
    gsap.from(highlightsRef.current, {
      scrollTrigger: {
        trigger: textBlockRef.current,
        start: "top 75%",
      },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="relative bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Video Block */}
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          <video
            ref={videoRef}
            src="./Nesavaruvi.mp4"
            type="video/mp4"
            muted
            loop
            playsInline
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>

        {/* Text Block */}
        <div
          ref={textBlockRef}
          className="bg-[#e67e22] text-white p-10 rounded-xl shadow-2xl relative z-10 -mt-16 md:mt-0 md:-ml-20"
        >
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="mb-6 text-lg text-gray-200 leading-relaxed">
            We are more than just a boutique — we are a movement of elegance,
            tradition, and modern creativity, stitched into every piece we
            offer.
          </p>

          <ul className="space-y-3">
            {[
              "Timeless Indian Aesthetics",
              "Custom Tailored Looks",
              "Artisan Sourced",
            ].map((item, index) => (
              <li
                key={index}
                ref={(el) => (highlightsRef.current[index] = el)}
                className="flex items-center gap-3 text-gray-100"
              >
                <span className="text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Discover the Story →
          </button>
        </div>
      </div>
    </section>
  );
}
