"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [pluginsEnabled, setPluginsEnabled] = useState(true);
  const [Enabled, setEnabled] = useState(true);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function data() {
      try {
        const response = await fetch("/api/data", {
          cache: "no-store",
        });
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    data();
  }, []);

  return (
    <CartContext.Provider
      value={{
        data,
        setData,
        pluginsEnabled,
        setPluginsEnabled,
        setEnabled,
        Enabled,
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
