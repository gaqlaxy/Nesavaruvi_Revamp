import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  // Refs
  const videoRef = useRef();
  const featuresRef = useRef([]);
  const ctaButtonRef = useRef();

  useEffect(() => {
    // Video parallax
    gsap.to(videoRef.current, {
      scale: 1.05,
      scrollTrigger: {
        trigger: videoRef.current,
        scrub: true,
      },
      ease: "none",
    });

    // Video play/pause on scroll
    const st = ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => videoRef.current.play(),
      onLeave: () => videoRef.current.pause(),
      onEnterBack: () => videoRef.current.play(),
      onLeaveBack: () => videoRef.current.pause(),
    });

    // Features animation
    gsap.from(featuresRef.current, {
      scrollTrigger: {
        trigger: featuresRef.current[0]?.parentElement,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: "power3.out",
    });

    // CTA button elastic effect
    const btn = ctaButtonRef.current;
    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - rect.left - rect.width / 2) * 0.3,
        y: (e.clientY - rect.top - rect.height / 2) * 0.3,
        duration: 0.8,
        ease: "power2.out",
      });
    };
    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      });
    };
    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      st.kill();
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const features = [
    {
      icon: "👑",
      title: "Artisan Excellence",
      description: "Hand-crafted with precision and care by skilled artisans",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      icon: "🌱",
      title: "Sustainable Fashion",
      description: "Eco-friendly materials and ethical production practices",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      icon: "✨",
      title: "Custom Fits",
      description: "Tailored to perfection for your unique style",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      icon: "💫",
      title: "24/7 Support",
      description: "Always here to help with your fashion needs",
      color: "bg-gradient-to-br from-[#FB8000] to-[#d35400]",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fff7f0] relative overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-square">
              <video
                ref={videoRef}
                src="./Nesavaruvi.mp4"
                type="video/mp4"
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                aria-label="About our brand"
              />
            </div>
            <div className="absolute inset-0 border-8 border-[#FB8000]/10 rounded-2xl pointer-events-none" />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => (featuresRef.current[index] = el)}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 rounded-xl ${feature.color} opacity-10`}
                  />
                  <div className="relative z-10 mb-4 text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#FB8000] mb-2 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 relative z-10">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex justify-center">
              <button
                ref={ctaButtonRef}
                className="bg-[#FB8000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d35400] transition-colors shadow-lg"
                aria-label="Begin Your Style Journey"
              >
                Begin Your Style Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
