import { useCart } from "../context/CartContext";
import emailjs from "emailjs-com"; // Ensure you have emailjs-com installed
import { useState, useRef } from "react";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  // Function to handle sending the enquiry

  const handleSendEnquiry = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const productList = cartItems
      .map(
        (item) =>
          `• ${item.name} (Qty: ${item.qty}) - ₹${item.price * item.qty}`
      )
      .join("\n");

    const formData = new FormData(formRef.current);
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      message: `Enquiry for the following products:\n${productList}`,
      address: formData.get("address"),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Enquiry sent successfully!");
      clearCart();
    } catch (error) {
      alert("Failed to send enquiry. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto py-12 px-4 pt-[160px] md:pt-[120px]">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 mr-3"
                />
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-600">Qty: {item.qty}</div>
                  <div className="text-sm text-gray-800">
                    ₹{item.price * item.qty}
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <form
            ref={formRef}
            onSubmit={handleSendEnquiry}
            className="space-y-4"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              name="mobile"
              type="tel"
              required
              placeholder="Your Phone"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              name="address"
              required
              placeholder="Your Address"
              className="w-full border px-4 py-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#FB8000] text-white font-medium rounded-lg transition hover:bg-[#e98b38]"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </>
      )}
    </section>
  );
}
