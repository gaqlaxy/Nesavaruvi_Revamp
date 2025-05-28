import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Testimonials() {
  const col1Ref = useRef();
  const col2Ref = useRef();
  const col3Ref = useRef();

  useEffect(() => {
    // Col 1: up
    gsap.to(col1Ref.current, {
      yPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Col 2: down — from -50% → 0%
    gsap.fromTo(
      col2Ref.current,
      { yPercent: -50 },
      {
        yPercent: 0,
        duration: 25,
        ease: "none",
        repeat: -1,
      }
    );

    // Col 3: up slower
    gsap.to(col3Ref.current, {
      yPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const testimonials = [
    { text: "Amazing quality and service!", author: "Priya, Mumbai" },
    {
      text: "I get compliments every time I wear their pieces.",
      author: "Rahul, Delhi",
    },
    { text: "Truly one-of-a-kind designs.", author: "Sara, Bangalore" },
  ];

  // Duplicate each to allow seamless looping
  const items1 = [...testimonials, ...testimonials];
  const items2 = [
    ...testimonials.slice().reverse(),
    ...testimonials.slice().reverse(),
  ];
  const items3 = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="h-[400px] overflow-hidden">
          <div ref={col1Ref} className="space-y-8 will-change-transform">
            {items1.map((t, i) => (
              <blockquote key={i} className="p-6 bg-white rounded-xl shadow">
                <p className="italic">“{t.text}”</p>
                <footer className="mt-4 text-right text-sm text-gray-600">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="h-[400px] overflow-hidden">
          <div ref={col2Ref} className="space-y-8 will-change-transform">
            {items2.map((t, i) => (
              <blockquote key={i} className="p-6 bg-white rounded-xl shadow">
                <p className="italic">“{t.text}”</p>
                <footer className="mt-4 text-right text-sm text-gray-600">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="h-[400px] overflow-hidden">
          <div ref={col3Ref} className="space-y-8 will-change-transform">
            {items3.map((t, i) => (
              <blockquote key={i} className="p-6 bg-white rounded-xl shadow">
                <p className="italic">“{t.text}”</p>
                <footer className="mt-4 text-right text-sm text-gray-600">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
