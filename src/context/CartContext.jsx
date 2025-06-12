// src/context/CartContext.jsx
import { s } from "framer-motion/client";
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((items) => {
      const idx = items.findIndex((i) => i.id === product.id);
      if (idx > -1) {
        // increment quantity
        const copy = [...items];
        copy[idx].qty += 1;
        return copy;
      }
      return [...items, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((i) => i.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
