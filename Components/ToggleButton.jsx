"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();
  // console.log(theme);
  return (
    <button
      className="button dark:text-white dark:bg-gray-500"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BsSun id="icon"  />
      ) : (
        <BsMoon id="icon" />
      )}
    </button>
  );
}
