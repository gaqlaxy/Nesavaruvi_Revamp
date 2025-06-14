// import { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { HiOutlineMenu, HiShoppingCart, HiX } from "react-icons/hi";
// import logo from "../assets/logo.png";
// import CartSidebar from "./CartSidebar";
// import { Link, NavLink } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import Scrollspy from "react-scrollspy";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const mobileMenuRef = useRef();
//   const overlayRef = useRef();
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const { cartItems } = useCart();
//   const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

//   // GSAP animations for mobile menu
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setHasScrolled(true);
//       } else {
//         setHasScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     // Animate the navbar background color on scroll

//     if (isMobileMenuOpen) {
//       gsap.to(mobileMenuRef.current, {
//         x: 0,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//       gsap.to(overlayRef.current, {
//         opacity: 1,
//         duration: 0.2,
//         ease: "power2.out",
//       });
//     } else {
//       gsap.to(mobileMenuRef.current, {
//         x: "-100%",
//         duration: 0.3,
//         ease: "power2.out",
//       });
//       gsap.to(overlayRef.current, {
//         opacity: 0,
//         duration: 0.2,
//         ease: "power2.out",
//       });
//     }
//   }, [isMobileMenuOpen]);

//   return (
//     <nav
//       // Control Shadow for mobile nav

//       className={`fixed  w-full top-10 z-50 bg-white transition-shadow duration-300 ${
//         hasScrolled ? " " : ""
//         // hasScrolled ? "shadow-sm, backdrop-blur, bg-white/90" : ""
//       }`}
//     >
//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
//         {/* Logo */}
//         {/* <div className="text-2xl font-bold">Boutique</div>
//          */}
//         <Link to="/">
//           <img
//             // src="./logo.png"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             src={logo}
//             alt="Nesavaruvi Boutique's Logo"
//             className="h-12 md:h-12 object-contain"
//             onError={(e) => {
//               e.currentTarget.onerror = null;
//               e.currentTarget.src = "/logo.png";
//             }}
//           />
//         </Link>

//         {/* Navigation Links */}
//         {/* <div className="flex space-x-8">
//           <ul className="flex gap-6">
//             <li>
//               <a
//                 href="#"
//                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 className={({ isActive }) =>
//                   isActive ? "text-[#FB8000] font-semibold" : "text-gray-700"
//                 }
//                 end
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#categories"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#FB8000] font-semibold" : "text-gray-700"
//                 }
//               >
//                 Categories
//               </a>
//             </li>
//             <li>
//               <NavLink
//                 to="/top-products"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#FB8000] font-semibold" : "text-gray-700"
//                 }
//               >
//                 Top Products
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#FB8000] font-semibold" : "text-gray-700"
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div> */}
//         <Scrollspy
//           items={["home", "topproducts", "categories", "contact"]}
//           currentClassName="text-[#FB8000] font-semibold text-lg"
//           className="flex gap-6"
//           offset={-80} // adjust if you have a fixed navbar
//         >
//           <li>
//             <button
//               onClick={() => {
//                 document
//                   .getElementById("home")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="bg-transparent border-none cursor-pointer text-lg font-semibold"
//             >
//               Home
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => {
//                 document
//                   .getElementById("topproducts")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="bg-transparent border-none cursor-pointer text-lg font-semibold"
//             >
//               Top Products
//             </button>
//           </li>

//           <li>
//             <button
//               onClick={() => {
//                 document
//                   .getElementById("categories")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="bg-transparent border-none cursor-pointer text-lg font-semibold"
//             >
//               Categories
//             </button>
//           </li>

//           <li>
//             <button
//               onClick={() => {
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="bg-transparent border-none cursor-pointer text-lg font-semibold"
//             >
//               Contact
//             </button>
//           </li>
//         </Scrollspy>

//         {/* Cart */}
//         <Link to="/cart" className="relative flex items-center space-x-2">
//           <HiShoppingCart className="w-6 h-6" />
//           {cartCount > 0 && (
//             <span className="bg-black text-[#FB8000] rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//         <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
//       </div>

//       {/* Mobile Navigation */}
//       <div className="md:hidden flex items-center justify-between px-4 py-4">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="p-2"
//         >
//           <HiOutlineMenu className="w-6 h-6" />
//         </button>

//         {/* Logo */}
//         {/* <div className="text-xl font-bold">Boutique</div> */}
//         <img src="./logo.png" alt="Nesavaruvi Boutique's Logo" />

//         {/* Cart */}

//         <Link to="/cart" className="relative flex items-center space-x-2 p-2">
//           <HiShoppingCart className="w-6 h-6" />
//           {cartCount > 0 && (
//             <span className="bg-black text-[#FB8000] rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         ref={overlayRef}
//         className="fixed inset-0 bg-black/50 z-40 pointer-events-none opacity-0"
//         onClick={() => setIsMobileMenuOpen(false)}
//       />

//       {/* Mobile Menu Drawer */}
//       <div
//         ref={mobileMenuRef}
//         className="fixed left-0 top-10 h-full w-64 bg-white shadow-xl z-50 transform -translate-x-full"
//       >
//         <div className="p-4 border-b flex justify-between items-center">
//           {/* <div className="text-xl font-bold">Menu</div> */}
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="p-2 hover:text-gray-600"
//           >
//             <HiX className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="flex flex-col p-4 space-y-4">
//           {["Products", "BestSellers", "About", "Contact"].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="py-2 hover:text-gray-600 transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { HiOutlineMenu, HiShoppingCart, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import CartSidebar from "./CartSidebar";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Scrollspy from "react-scrollspy";

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

  return (
    <nav
      // Control Shadow for mobile nav

      className={`fixed  w-full top-8 z-50 bg-white transition-shadow duration-300 ${
        hasScrolled ? " " : ""
        // hasScrolled ? "shadow-sm, backdrop-blur, bg-white/90" : ""
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        {/* <div className="text-2xl font-bold">Boutique</div>
         */}
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
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-none cursor-pointer text-lg font-semibold"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                document
                  .getElementById("topproducts")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-none cursor-pointer text-lg font-semibold"
            >
              Top Products
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                document
                  .getElementById("categories")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-none cursor-pointer text-lg font-semibold"
            >
              Categories
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-none cursor-pointer text-lg font-semibold"
            >
              Contact
            </button>
          </li>
        </Scrollspy>

        {/* Cart */}
        <Link to="/cart" className="relative flex items-center space-x-2">
          <HiShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="bg-black text-[#FB8000] rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
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
                <p className="newsletter-text">Subscribe to our Newsletter</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handle subscription logic here
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
