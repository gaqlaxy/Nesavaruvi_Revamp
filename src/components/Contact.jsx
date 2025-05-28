import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef();
  const formRef = useRef();
  const infoRef = useRef();

  useEffect(() => {
    gsap.from(infoRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-tr from-orange-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <div ref={infoRef} className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-700">
            Have questions or want to collaborate? Drop us a message — we’d love
            to hear from you!
          </p>
          <div className="space-y-3 text-lg">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              hello@yourboutique.com
            </p>
            <p>
              <span className="font-semibold">WhatsApp:</span> +91 98765 43210
            </p>
            <p>
              <span className="font-semibold">Visit:</span> 123 Boutique Street,
              Mumbai
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className="bg-white p-8 rounded-2xl shadow-2xl border border-orange-100"
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b-2 border-orange-300 focus:outline-none focus:border-orange-500 py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b-2 border-orange-300 focus:outline-none focus:border-orange-500 py-2"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border-b-2 border-orange-300 focus:outline-none focus:border-orange-500 py-2 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
