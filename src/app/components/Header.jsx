"use client";
import React from "react";
import { useContext } from "react";
import TheamContext from "../coontext/TheamContext";

const Header = () => {
  const { theme } = useContext(TheamContext);
  return (
    <div
      className={`header ${theme === "dark" ? "bg-amber-950 text-amber-200" : "bg-white"}`}
    >
      Header Theme: {theme}
    </div>
  );
};

export default Header;
