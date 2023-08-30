"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function data() {
      try {
        const response = await fetch("/api/data");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, []);

  return (
    <CartContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
