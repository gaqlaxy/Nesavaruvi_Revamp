// import { useCart } from "../context/CartContext";
// import emailjs from "emailjs-com"; // Ensure you have emailjs-com installed
// import { useState, useRef } from "react";

// export default function CartPage() {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const formRef = useRef();
//   const [isLoading, setIsLoading] = useState(false);
//   // Function to handle sending the enquiry

//   const handleSendEnquiry = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const productList = cartItems
//       .map(
//         (item) =>
//           `• ${item.name} (Qty: ${item.qty}) - ₹${item.price * item.qty}`
//       )
//       .join("\n");

//     const formData = new FormData(formRef.current);
//     const templateParams = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       mobile: formData.get("mobile"),
//       message: `Enquiry for the following products:\n${productList}`,
//       address: formData.get("address"),
//     };

//     try {
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );
//       alert("Enquiry sent successfully!");
//       clearCart();
//     } catch (error) {
//       alert("Failed to send enquiry. Please try again.");
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="max-w-2xl mx-auto py-12 px-4 pt-[160px] md:pt-[120px]">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="mb-6">
//             {cartItems.map((item) => (
//               <li key={item.id} className="flex items-center mb-2">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-12 h-12 mr-3"
//                 />
//                 <div className="flex-1">
//                   <div className="font-semibold">{item.name}</div>
//                   <div className="text-sm text-gray-600">Qty: {item.qty}</div>
//                   <div className="text-sm text-gray-800">
//                     ₹{item.price * item.qty}
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 ml-2"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <form
//             ref={formRef}
//             onSubmit={handleSendEnquiry}
//             className="space-y-4"
//           >
//             <input
//               name="name"
//               type="text"
//               required
//               placeholder="Your Name"
//               className="w-full border px-4 py-2 rounded"
//             />
//             <input
//               name="email"
//               type="email"
//               required
//               placeholder="Your Email"
//               className="w-full border px-4 py-2 rounded"
//             />
//             <input
//               name="mobile"
//               type="tel"
//               required
//               placeholder="Your Phone"
//               className="w-full border px-4 py-2 rounded"
//             />
//             <textarea
//               name="address"
//               required
//               placeholder="Your Address"
//               className="w-full border px-4 py-2 rounded"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full py-3 bg-[#FB8000] text-white font-medium rounded-lg transition hover:bg-[#e98b38]"
//               disabled={isLoading}
//             >
//               {isLoading ? "Sending..." : "Send Enquiry"}
//             </button>
//           </form>
//         </>
//       )}
//     </section>
//   );
// }

// import { useRef, useState } from "react";
// import { useCart } from "../context/CartContext";
// import emailjs from "emailjs-com";

// export default function CartPage() {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const formRef = useRef();
//   const [isLoading, setIsLoading] = useState(false);
//   const [activeStep, setActiveStep] = useState(1); // 1 = cart, 2 = details, 3 = confirmation

//   // Calculate totals
//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.qty,
//     0
//   );
//   const shipping = subtotal > 0 ? 49 : 0;
//   const total = subtotal + shipping;

//   const handleSendEnquiry = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const productList = cartItems
//       .map(
//         (item) =>
//           `• ${item.name} (Qty: ${item.qty}) - ₹${item.price * item.qty}`
//       )
//       .join("\n");

//     const formData = new FormData(formRef.current);
//     const templateParams = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       mobile: formData.get("mobile"),
//       message: `Enquiry for the following products:\n${productList}`,
//       address: formData.get("address"),
//     };

//     try {
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );
//       setActiveStep(3);
//       clearCart();
//     } catch (error) {
//       alert("Failed to send enquiry. Please try again.");
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8 pt-[160px] md:pt-[120px]">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold mb-2">
//           Your Shopping Cart
//         </h1>
//         <p className="text-gray-600">
//           {cartItems.length === 0
//             ? "Your cart is currently empty"
//             : `${cartItems.length} item${
//                 cartItems.length !== 1 ? "s" : ""
//               } in your cart`}
//         </p>
//       </div>

//       {/* Stepper */}
//       <div className="flex justify-center mb-12">
//         <div className="flex items-center w-full max-w-md">
//           <div
//             className={`flex-1 h-1 ${
//               activeStep >= 1 ? "bg-[#FB8000]" : "bg-gray-200"
//             }`}
//           ></div>
//           <div
//             className={`flex flex-col items-center mx-2 ${
//               activeStep >= 1 ? "text-[#FB8000]" : "text-gray-400"
//             }`}
//           >
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                 activeStep >= 1 ? "bg-[#FB8000] text-white" : "bg-gray-200"
//               }`}
//             >
//               1
//             </div>
//             <span className="mt-2 text-sm">Cart</span>
//           </div>

//           <div
//             className={`flex-1 h-1 ${
//               activeStep >= 2 ? "bg-[#FB8000]" : "bg-gray-200"
//             }`}
//           ></div>
//           <div
//             className={`flex flex-col items-center mx-2 ${
//               activeStep >= 2 ? "text-[#FB8000]" : "text-gray-400"
//             }`}
//           >
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                 activeStep >= 2 ? "bg-[#FB8000] text-white" : "bg-gray-200"
//               }`}
//             >
//               2
//             </div>
//             <span className="mt-2 text-sm">Details</span>
//           </div>

//           <div
//             className={`flex-1 h-1 ${
//               activeStep >= 3 ? "bg-[#FB8000]" : "bg-gray-200"
//             }`}
//           ></div>
//           <div
//             className={`flex flex-col items-center mx-2 ${
//               activeStep >= 3 ? "text-[#FB8000]" : "text-gray-400"
//             }`}
//           >
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                 activeStep >= 3 ? "bg-[#FB8000] text-white" : "bg-gray-200"
//               }`}
//             >
//               3
//             </div>
//             <span className="mt-2 text-sm">Confirm</span>
//           </div>
//         </div>
//       </div>

//       {activeStep === 3 ? (
//         <div className="max-w-2xl mx-auto text-center py-12">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-12 text-green-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold mb-4">
//             Enquiry Sent Successfully!
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Thank you for your enquiry. We've received your order details and
//             will contact you shortly to confirm your purchase.
//           </p>
//           <button
//             onClick={() => (window.location.href = "/")}
//             className="px-6 py-3 bg-[#FB8000] text-white font-medium rounded-lg hover:bg-[#e98b38] transition"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       ) : cartItems.length === 0 ? (
//         <div className="max-w-md mx-auto text-center py-12">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-24 w-24 mx-auto text-gray-300 mb-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//             />
//           </svg>
//           <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
//           <p className="text-gray-600 mb-8">
//             Looks like you haven't added anything to your cart yet. Start
//             shopping to fill it!
//           </p>
//           <button
//             onClick={() => (window.location.href = "/")}
//             className="px-6 py-3 bg-[#FB8000] text-white font-medium rounded-lg hover:bg-[#e98b38] transition"
//           >
//             Browse Products
//           </button>
//         </div>
//       ) : (
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Cart Items */}
//           <div className="lg:w-7/12">
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <div className="border-b pb-4 mb-4">
//                 <h2 className="text-xl font-semibold">Cart Items</h2>
//               </div>

//               <div className="space-y-6">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center border-b pb-6 last:border-0"
//                   >
//                     <div className="bg-gray-100 border rounded-lg overflow-hidden w-24 h-24">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     <div className="flex-1 ml-4">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h3 className="font-medium text-lg">{item.name}</h3>
//                           <p className="text-gray-600 text-sm">
//                             Size: Standard
//                           </p>
//                         </div>
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-gray-400 hover:text-red-500 transition"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </button>
//                       </div>

//                       <div className="flex justify-between items-center mt-4">
//                         <div className="flex items-center border rounded-lg">
//                           <button
//                             className="px-3 py-1 text-gray-600 hover:bg-gray-100"
//                             onClick={() => {
//                               if (item.qty > 1) {
//                                 // Decrease quantity logic
//                               }
//                             }}
//                           >
//                             -
//                           </button>
//                           <span className="px-3 py-1">{item.qty}</span>
//                           <button
//                             className="px-3 py-1 text-gray-600 hover:bg-gray-100"
//                             onClick={() => {
//                               // Increase quantity logic
//                             }}
//                           >
//                             +
//                           </button>
//                         </div>

//                         <div className="font-medium text-lg">
//                           ₹{item.price * item.qty}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex justify-between mt-8 pt-6 border-t">
//                 <button
//                   onClick={() => (window.location.href = "/")}
//                   className="flex items-center text-[#FB8000] hover:text-[#e98b38] transition"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-1"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Continue Shopping
//                 </button>

//                 <button
//                   onClick={clearCart}
//                   className="text-gray-500 hover:text-red-500 transition"
//                 >
//                   Clear Cart
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Order Summary and Form */}
//           <div className="lg:w-5/12">
//             <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
//               <div className="border-b pb-4 mb-4">
//                 <h2 className="text-xl font-semibold">Order Summary</h2>
//               </div>

//               <div className="space-y-4 mb-6">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Subtotal</span>
//                   <span className="font-medium">₹{subtotal}</span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="font-medium">
//                     {shipping > 0 ? `₹${shipping}` : "Free"}
//                   </span>
//                 </div>

//                 <div className="flex justify-between pt-4 border-t">
//                   <span className="font-semibold">Total</span>
//                   <span className="font-bold text-lg">₹{total}</span>
//                 </div>
//               </div>

//               {activeStep === 1 ? (
//                 <button
//                   onClick={() => setActiveStep(2)}
//                   className="w-full py-3 bg-[#FB8000] text-white font-medium rounded-lg hover:bg-[#e98b38] transition"
//                 >
//                   Proceed to Checkout
//                 </button>
//               ) : (
//                 <form
//                   ref={formRef}
//                   onSubmit={handleSendEnquiry}
//                   className="space-y-4"
//                 >
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       name="name"
//                       type="text"
//                       required
//                       placeholder="Enter your name"
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#FB8000] focus:border-[#FB8000]"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       name="email"
//                       type="email"
//                       required
//                       placeholder="Enter your email"
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#FB8000] focus:border-[#FB8000]"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Phone Number
//                     </label>
//                     <input
//                       name="mobile"
//                       type="tel"
//                       required
//                       placeholder="Enter your phone number"
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#FB8000] focus:border-[#FB8000]"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Delivery Address
//                     </label>
//                     <textarea
//                       name="address"
//                       required
//                       rows="3"
//                       placeholder="Enter your full address"
//                       className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#FB8000] focus:border-[#FB8000]"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full py-3 bg-[#FB8000] text-white font-medium rounded-lg hover:bg-[#e98b38] transition flex items-center justify-center"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Processing...
//                       </>
//                     ) : (
//                       "Send Enquiry"
//                     )}
//                   </button>

//                   {activeStep === 2 && (
//                     <button
//                       type="button"
//                       onClick={() => setActiveStep(1)}
//                       className="w-full py-2.5 text-gray-600 font-medium rounded-lg hover:text-[#FB8000] transition"
//                     >
//                       Back to Cart
//                     </button>
//                   )}
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// =============================================================================================
import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import emailjs from "emailjs-com";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(1); // 1 = cart, 2 = details, 3 = confirmation

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const shipping = subtotal > 0 ? 49 : 0;
  const total = subtotal + shipping;

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
      setActiveStep(3);
      clearCart();
    } catch (error) {
      alert("Failed to send enquiry. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle quantity changes
  const handleQuantityChange = (itemId, newQty) => {
    if (newQty > 0) {
      updateQuantity(itemId, newQty);
    }
  };

  //scroll to top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-[160px] md:pt-[120px]">
      <div className="text-center mb-12">
        {/* <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Your Shopping Cart
        </h1> */}
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
          Your <span className="font-medium text-[#fb8000]">Shopping Cart</span>
        </h2>
        <p className="text-gray-600">
          {cartItems.length === 0
            ? "Your cart is currently empty"
            : `${cartItems.length} item${
                cartItems.length !== 1 ? "s" : ""
              } in your cart`}
        </p>
      </div>

      {/* Stepper */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center w-full max-w-md">
          <div
            className={`flex-1 h-1 ${
              activeStep >= 1 ? "bg-[#FB8000]" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`flex flex-col items-center mx-2 ${
              activeStep >= 1 ? "text-[#FB8000]" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeStep >= 1 ? "bg-[#FB8000] text-white" : "bg-gray-200"
              }`}
            >
              1
            </div>
            <span className="mt-2 text-sm">Cart</span>
          </div>

          <div
            className={`flex-1 h-1 ${
              activeStep >= 2 ? "bg-[#FB8000]" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`flex flex-col items-center mx-2 ${
              activeStep >= 2 ? "text-[#FB8000]" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeStep >= 2 ? "bg-[#FB8000] text-white" : "bg-gray-200"
              }`}
            >
              2
            </div>
            <span className="mt-2 text-sm">Details</span>
          </div>

          <div
            className={`flex-1 h-1 ${
              activeStep >= 3 ? "bg-[#FB8000]" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`flex flex-col items-center mx-2 ${
              activeStep >= 3 ? "text-[#FB8000]" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeStep >= 3 ? "bg-[#FB8000] text-white" : "bg-gray-200"
              }`}
            >
              3
            </div>
            <span className="mt-2 text-sm">Confirm</span>
          </div>
        </div>
      </div>

      {activeStep === 3 ? (
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Enquiry Sent Successfully!
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for your enquiry. We've received your order details and
            will contact you shortly to confirm your purchase.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-[#FB8000] text-white font-medium rounded-lg hover:bg-[#e98b38] transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="max-w-md mx-auto text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-gray-300 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet. Start
            shopping to fill it!
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-[#FB8000] text-white font-medium rounded-lg hover:bg-[#e98b38] transition"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold">Cart Items</h2>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border-b pb-6 last:border-0"
                  >
                    <div className="bg-gray-100 border rounded-lg overflow-hidden w-24 h-24">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 ml-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <p className="text-gray-600 text-sm">
                            Size: Standard
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-lg">
                          <button
                            className={`px-3 py-1 text-gray-600 hover:bg-gray-100 ${
                              item.qty <= 1
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            onClick={() =>
                              handleQuantityChange(item.id, item.qty - 1)
                            }
                            disabled={item.qty <= 1}
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.qty}</span>
                          <button
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() =>
                              handleQuantityChange(item.id, item.qty + 1)
                            }
                          >
                            +
                          </button>
                        </div>

                        <div className="font-medium text-lg">
                          ₹{item.price * item.qty}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8 pt-6 border-t">
                <button
                  onClick={() => (window.location.href = "/")}
                  className="flex items-center text-[#FB8000] hover:text-[#e98b38] transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Continue Shopping
                </button>

                <button
                  onClick={clearCart}
                  className="text-gray-500 hover:text-red-500 transition"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary and Form */}
          <div className="lg:w-5/12">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping > 0 ? `₹${shipping}` : "Free"}
                  </span>
                </div>

                <div className="flex justify-between pt-4 border-t">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg">₹{total}</span>
                </div>
              </div>

              {activeStep === 1 ? (
                <button
                  onClick={() => setActiveStep(2)}
                  className="w-full py-3 bg-[#FB8000] text-white font-medium rounded-lg hover:bg-[#e98b38] transition"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSendEnquiry}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#FB8000] focus:border-[#FB8000]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#FB8000] focus:border-[#FB8000]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      name="mobile"
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#FB8000] focus:border-[#FB8000]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      required
                      rows="3"
                      placeholder="Enter your full address"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-[#FB8000] focus:border-[#FB8000]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FB8000] text-white font-medium rounded-lg hover:bg-[#e98b38] transition flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>

                  {activeStep === 2 && (
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="w-full py-2.5 text-gray-600 font-medium rounded-lg hover:text-[#FB8000] transition"
                    >
                      Back to Cart
                    </button>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
