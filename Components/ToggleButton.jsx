"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <button
      className="py-2 px-4 text-slate-100 dark:text-white bg-gray-500 dark:bg-gray-500 rounded-lg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BsSun className="w-3 h-3 " />
      ) : (
        <BsMoon className="w-3 h-3 " />
      )}
    </button>
  );
}
