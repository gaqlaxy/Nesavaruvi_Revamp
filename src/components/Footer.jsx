import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
      // scrollTrigger: {
      //   trigger: footerRef.current,
      //   start: "top bottom",
      //   toggleActions: "play none none none",
      // },
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
                {/* <img src="logo.png" alt="" /> */}
                <img
                  src={logo}
                  alt="Nesavaruvi Boutique's Logo"
                  className="h-12 md:h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/logo.png";
                  }}
                />
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
                  className="w-10 h-10 rounded-full  bg-gray-800 flex items-center justify-center hover:bg-[#FB8000] transition-colors"
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
                    className="hover:text-[#FB8000] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => (elementsRef.current[2] = el)}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white">Customer Care</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/customer-care/shipping"
                  className="hover:text-[#FB8000] transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-care/returns"
                  className="hover:text-[#FB8000] transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-care/support"
                  className="hover:text-[#FB8000] transition-colors"
                >
                  Customer Support
                </Link>
              </li>
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
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB8000] text-gray-200 placeholder-gray-500 transition"
              />
              <button
                // onClick={(e) => e.preventDefault()}
                // Replace with actual subscription logic

                type="submit"
                className="w-full py-3 bg-[#FB8000] hover:bg-[#e98b38] text-white font-medium rounded-lg transition"
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
    </footer>
  );
};

export default Footer;
