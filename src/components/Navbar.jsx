import { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { HiOutlineMenu, HiShoppingCart, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import CartSidebar from "./CartSidebar";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Scrollspy from "react-scrollspy";
import emailjs from "emailjs-com";
import { i } from "framer-motion/client";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef();
  const overlayRef = useRef();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const mobileMenuAnimRef = useRef(null);
  const overlayAnimRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const cartIconRef = useRef(null);
  const scrollDirection = useScrollDirection();

  const handleSubscribe = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        "#newsletter-form",
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert("Thank you for subscribing!");
          e.target.reset();
        },
        (error) => {
          console.error("Subscription failed:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  useLayoutEffect(() => {
    if (isMenuVisible && isOpen) {
      gsap.fromTo(
        mobileMenuAnimRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        overlayAnimRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    }
  }, [isMenuVisible, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsMenuVisible(true);
      gsap.fromTo(
        mobileMenuAnimRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        overlayAnimRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else if (isMenuVisible) {
      // Animate out and remove from DOM
      gsap.to(mobileMenuAnimRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsMenuVisible(false),
      });
      gsap.to(overlayAnimRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  // GSAP animations for mobile menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle body overflow when menu is open
  // This effect ensures that the body does not scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    // If we're already on homepage, just scroll
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    gsap.fromTo(
      cartIconRef.current,
      { scale: 1 },
      { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1 }
    );
  }, [cartCount]);
  return (
    // <nav
    //   className={`fixed  w-full top-8 z-50 bg-white transition-shadow duration-300 ${
    //     hasScrolled ? " " : ""
    //   }`}
    // >

    // Hide Scrollbar
    <nav
      className={`fixed w-full z-50 bg-white transition-all duration-300 ${
        scrollDirection === "down" ? "-top-32" : "top-8"
      } ${hasScrolled ? "" : ""}`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/">
          <img
            // src="./logo.png"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            src={logo}
            alt="Nesavaruvi Boutique's Logo"
            className="h-12 md:h-12 object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/logo.png";
            }}
          />
        </Link>

        {/* Navigation Links */}

        <Scrollspy
          items={["home", "topproducts", "categories", "contact"]}
          currentClassName="text-[#FB8000] font-semibold text-lg"
          className="flex gap-6"
          offset={-80} // adjust if you have a fixed navbar
        >
          <li>
            <button
              onClick={() => {
                navigate("/#home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-none cursor-pointer text-lg font-medium"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection("topproducts")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="bg-transparent border-none cursor-pointer text-lg font-medium"
            >
              Top Products
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                scrollToSection("categories")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="bg-transparent border-none cursor-pointer text-lg font-medium"
            >
              Categories
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                scrollToSection("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="bg-transparent border-none cursor-pointer text-lg font-medium"
            >
              Contact
            </button>
          </li>
        </Scrollspy>

        {/* Cart */}
        <Link
          ref={cartIconRef}
          to="/cart"
          className="relative flex items-center space-x-2"
        >
          <HiShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="bg-[#FB8000] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
              {cartCount}
            </span>
          )}
        </Link>
        <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        <button
          onClick={() => setIsOpen(true)}
          className="menu-toggle open-btn"
          aria-label="Open navigation menu"
        >
          <HiOutlineMenu className="icon" />
        </button>
        <img
          src="./logo.png"
          alt="Nesavaruvi Boutique's Logo"
          className="h-12"
        />
        <Link to="/cart" className="relative flex items-center space-x-2 p-2">
          <HiShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="bg-black text-[#FB8000] rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {isMenuVisible && (
        <>
          {/* Overlay */}
          <div
            ref={overlayAnimRef}
            // className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          {/* Drawer */}
          <div
            ref={mobileMenuAnimRef}
            className="fixed top-8 right-0 w-screen h-screen bg-white/80 backdrop-blur-md shadow-lg z-50 p-6 flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <Link to="/">
                <img
                  src={logo}
                  alt="Nesavaruvi Boutique's Logo"
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/logo.png";
                  }}
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="menu-toggle close-btn"
                aria-label="Close navigation menu"
              >
                <HiX className="icon" />
              </button>
            </div>
            <ul className="space-y-2">
              <li className="text-lg font-medium">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-left py-2 hover:text-[#FB8000]"
                >
                  Home
                </button>
              </li>
              <li className="text-lg font-medium">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document
                      .getElementById("topproducts")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-left py-2 hover:text-[#FB8000]"
                >
                  Top Products
                </button>
              </li>
              <li className="text-lg font-medium">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);

                    document
                      .getElementById("categories")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-left py-2 hover:text-[#FB8000]"
                >
                  Categories
                </button>
              </li>

              <li className="text-lg font-medium">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-left py-2 hover:text-[#FB8000]"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="drawer-footer">
              <hr className="divider" />
              <div className="newsletter">
                {/* <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    alert("Subscribed!");
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="email-input"
                  />
                  <button type="submit" className="subscribe-btn">
                    Subscribe
                  </button>
                </form> */}
                <form
                  id="newsletter-form"
                  onSubmit={handleSubscribe}
                  className="newsletter-form"
                >
                  <h3>Subscribe to our Newsletter</h3>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="outline-none border border-gray-300 rounded-md p-2 w-full mb-2 focus:ring-[#FB8000]"
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>

              <div className="socials">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=917845151963&text=Hello%20Nesavaruvi%20Boutique!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
