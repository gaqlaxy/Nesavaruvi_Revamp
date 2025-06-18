import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef();
  const sectionRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simple fade-in animation
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // try {
    //   // await emailjs.sendForm(
    //   //   // "EMAILJS_SERVICE_ID",
    //   //   "process.env.REACT_APP_EMAILJS_SERVICE_ID",
    //   //   // "EMAILJS_TEMPLATE_ID",
    //   //   "process.env.REACT_APP_EMAILJS_TEMPLATE_ID",
    //   //   formRef.current,
    //   //   // "EMAILJS_USER_ID"
    //   //   "process.env.REACT_APP_EMAILJS_USER_ID"
    //   // );
    //   await emailjs.sendForm(
    //     // import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     // import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     // formRef.current,
    //     // import.meta.env.REACT_APP_EMAILJS_USER_ID
    //     "process.env.REACT_APP_EMAILJS_SERVICE_ID",
    //     "process.env.REACT_APP_EMAILJS_TEMPLATE_ID",
    //     formRef.current,
    //     "process.env.REACT_APP_EMAILJS_USER_ID"
    //   );

    //   setIsSubmitted(true);
    //   setIsLoading(false);
    //   formRef.current.reset();

    //   // Reset success message after 3 seconds
    //   setTimeout(() => setIsSubmitted(false), 3000);
    //   // } catch (error) {
    //   //   setIsLoading(false);
    //   //   alert("Failed to send message. Please try again.");
    //   // }
    // } catch (error) {
    //   console.error(error);
    //   alert(
    //     "Failed to send: " + (error?.text || error?.message || "Unknown error")
    //   );
    //   setIsLoading(false);
    // }
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Success:", result.text);
      setIsSubmitted(true);
      setIsLoading(false);
      formRef.current.reset();

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error details:", error);
      alert(
        `Failed to send: ${
          error.text || "Please check your EmailJS configuration"
        }`
      );
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
            Let's <span className="font-medium text-[#fb8000]">Connect</span>
          </h2>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Reach out to us for any inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm ">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1 ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB8000] focus:border-transparent transition  outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB8000] focus:border-transparent transition outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB8000]  focus:border-transparent transition  outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB8000]  focus:border-transparent transition  outline-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 bg-[#FB8000] text-white font-medium rounded-lg transition ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#e98b38]"
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {isSubmitted && (
                <div className="mt-4 p-3 bg-green-100 text-[#FB8000] rounded-lg text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Map and Contact Details */}
          <div className="space-y-6">
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-80 bg-gray-200 border border-gray-300">
              {/* Simple map placeholder - replace with actual Google Maps iframe */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-100 to-teal-200">
                {/* <div className="text-center">
                  <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                  </div>
                  <p className="font-semibold text-gray-800">
                    Nesavaruvi Boutique
                  </p>
                  <p className="text-gray-600">Chennai, India</p>
                </div> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.912669822208!2d80.09658327574692!3d12.91333421615173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb6d5049645%3A0x163a181528a0d072!2sNesavaruvi%20Boutique%20-%20Exclusive%20Handloom%20Elegance!5e0!3m2!1sen!2sin!4v1748473033858!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 text-[#FB8000]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Fashion Street</p>
                    <p className="text-gray-600">Chennai, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 text-[#FB8000]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 text-[#FB8000]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@nesavaruvi.com</p>
                    <p className="text-gray-600">support@nesavaruvi.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-3 text-[#FB8000]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 9AM - 8PM</p>
                    <p className="text-gray-600">Sat-Sun: 10AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
