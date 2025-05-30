import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { HiOutlineMenu, HiShoppingCart, HiX } from "react-icons/hi";

export default function Navbar({ cartCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef();
  const overlayRef = useRef();
  const [hasScrolled, setHasScrolled] = useState(false);

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

  useEffect(() => {
    // Animate the navbar background color on scroll

    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "sine.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "-100%",
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "sine.out",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    // <nav className=" w-full top-10 z-50 bg-white shadow-sm">
    <nav
      className={`fixed w-full top-10 z-50 bg-white ${
        hasScrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        {/* <div className="text-2xl font-bold">Boutique</div>
         */}
        <img
          src="./logo.png"
          alt="Nesavaruvi Boutique's Logo"
          className="h-12 md:h-12 object-contain"
        />

        {/* Navigation Links */}
        <div className="flex space-x-8">
          {["Products", "BestSellers", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#e67e22] transition-colors text-lg font-bold tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Cart */}
        <button className="relative flex items-center space-x-2">
          <HiShoppingCart className="w-6 h-6" />
          {/* Cart Count */}
          {cartCount > 0 && (
            <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          <HiOutlineMenu className="w-6 h-6" />
        </button>

        {/* Logo */}
        {/* <div className="text-xl font-bold">Boutique</div> */}
        <img src="./logo.png" alt="Nesavaruvi Boutique's Logo" />

        {/* Cart */}
        <button className="relative flex items-center space-x-2 p-2">
          <HiShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-40 pointer-events-none opacity-0"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-50 transform -translate-x-full"
      >
        <div className="p-4 border-b flex justify-between items-center">
          <div className="text-xl font-bold">Menu</div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:text-gray-600"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {["Products", "BestSellers", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
