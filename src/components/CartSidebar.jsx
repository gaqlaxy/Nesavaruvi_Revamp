// src/components/CartSidebar.jsx
import React, { useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FiX } from "react-icons/fi";
import gsap from "gsap";
import emailjs from "emailjs-com"; // Ensure you have emailjs-com installed

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCart();
  const panelRef = useRef();
  const backdropRef = useRef();

  // slide in/out animation
  useEffect(() => {
    if (isOpen) {
      gsap.to(panelRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [isOpen]);

  //EMAIL JS
  const handleSendEnquiry = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Prepare the message
    const productList = cartItems
      .map(
        (item) =>
          `• ${item.name} (Qty: ${item.qty}) - ₹${item.price * item.qty}`
      )
      .join("\n");

    const templateParams = {
      message: `Enquiry for the following products:\n${productList}`,
      // You can add more fields if your template expects them (like from_name, email, etc.)
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Enquiry sent successfully!");
    } catch (error) {
      alert("Failed to send enquiry. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      {/* backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 50 }}
      />
      {/* panel */}
      <aside
        ref={panelRef}
        className="fixed top-10 right-0 h-[95%] w-2/5 bg-white shadow-lg transform translate-x-full flex flex-col"
        style={{ zIndex: 60 }}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto flex-1">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-600">Qty: {item.qty}</p>
                  <p className="text-gray-800">₹{item.price * item.qty}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <button
            onClick={handleSendEnquiry}
            className="w-full py-3 bg-[#FB8000] text-white font-medium rounded-lg transition hover:bg-[#e98b38]"
            disabled={cartItems.length === 0}
          >
            Send Enquiry
          </button>
        </div>
      </aside>
    </>
  );
}
