"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [pluginsEnabled, setPluginsEnabled] = useState(true);
  const [data, setData] = useState();

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
        pluginsEnabled,
        setPluginsEnabled,
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
