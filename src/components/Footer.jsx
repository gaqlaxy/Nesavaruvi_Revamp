// import { useRef, useEffect } from "react";
// import { FiInstagram, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";
// import gsap from "gsap";

// export default function Footer() {
//   const footerRef = useRef();

//   useEffect(() => {
//     gsap.from(footerRef.current, {
//       opacity: 0,
//       y: 30,
//       duration: 1,
//       ease: "power3.out",
//     });
//   }, []);

//   return (
//     <footer ref={footerRef} className="bg-gray-900 text-gray-300 pt-12 pb-6">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Brand */}
//         <div>
//           <h3 className="text-2xl font-bold text-white mb-4">Nesavaruvi</h3>
//           <p className="text-sm">
//             Bringing you handcrafted elegance, one stitch at a time.
//           </p>
//         </div>

//         {/* Shop Links */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Shop</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-white">
//                 New Arrivals
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Best Sellers
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Collections
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Sale
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Support Links */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Support</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-white">
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 FAQ
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Shipping & Returns
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Privacy Policy
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter & Social */}
//         <div>
//           <h4 className="font-semibold text-white mb-3">Stay Connected</h4>
//           <form className="flex mb-4">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="flex-1 px-3 py-2 rounded-l-lg focus:outline-none text-white bg-gray-800 placeholder-gray-500"
//             />
//             <button
//               type="submit"
//               className="bg-orange-600 hover:bg-orange-700 px-4 rounded-r-lg text-white"
//             >
//               <FiMail size={20} />
//             </button>
//           </form>
//           <div className="flex space-x-4 text-xl">
//             <a href="#" className="hover:text-white">
//               <FiInstagram />
//             </a>
//             <a href="#" className="hover:text-white">
//               <FiFacebook />
//             </a>
//             <a href="#" className="hover:text-white">
//               <FiTwitter />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
//         © {new Date().getFullYear()} Nesavaruvi Boutique. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// =================================
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();
  const elementsRef = useRef([]);

  useEffect(() => {
    // Animate footer elements on load
    gsap.from(elementsRef.current, {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-20 pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div
            ref={(el) => (elementsRef.current[0] = el)}
            className="space-y-6"
          >
            <div className="flex items-center">
              <div className="">
                <img src="logo.png" alt="" />
              </div>
            </div>
            <p className="leading-relaxed">
              Elevating traditional craftsmanship through contemporary design
              since 2010.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full  bg-gray-800 flex items-center justify-center hover:bg-[#e67e22] transition-colors"
                >
                  {social === "facebook" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#039be5"
                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                      ></path>
                    </svg>
                  )}

                  {social === "instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 48 48"
                    >
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                        cx="19.38"
                        cy="42.035"
                        r="44.899"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fd5"></stop>
                        <stop offset=".328" stop-color="#ff543f"></stop>
                        <stop offset=".348" stop-color="#fc5245"></stop>
                        <stop offset=".504" stop-color="#e64771"></stop>
                        <stop offset=".643" stop-color="#d53e91"></stop>
                        <stop offset=".761" stop-color="#cc39a4"></stop>
                        <stop offset=".841" stop-color="#c837ab"></stop>
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      ></path>
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                        cx="11.786"
                        cy="5.54"
                        r="29.813"
                        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#4168c9"></stop>
                        <stop
                          offset=".999"
                          stop-color="#4168c9"
                          stop-opacity="0"
                        ></stop>
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                      ></path>
                      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                      <path
                        fill="#fff"
                        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                      ></path>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div
            ref={(el) => (elementsRef.current[1] = el)}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "New Arrivals",
                "Best Sellers",
                "Collections",
                "Special Offers",
                "Lookbook",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#e67e22] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white">Customer Care</h3>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "FAQs",
                "Shipping Policy",
                "Returns & Exchanges",
                "Size Guide",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#e67e22] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            ref={(el) => (elementsRef.current[3] = el)}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white">Newsletter</h3>
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e67e22] text-gray-200 placeholder-gray-500 transition"
              />
              <button
                // onClick={(e) => e.preventDefault()}
                // Replace with actual subscription logic

                type="submit"
                className="w-full py-3 bg-[#e67e22] hover:bg-[#e98b38] text-white font-medium rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div
          ref={(el) => (elementsRef.current[4] = el)}
          className="border-t border-gray-800 my-10"
        ></div>

        {/* Bottom section */}
        <div
          ref={(el) => (elementsRef.current[5] = el)}
          className="flex justify-center items-center"
        >
          <p>© {new Date().getFullYear()} Nesavaruvi. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="flex justify-center">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-teal-400 rounded-full mx-1 opacity-20"
              style={{
                animation: `pulse ${2 + Math.random() * 2}s infinite`,
              }}
            />
          ))}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
