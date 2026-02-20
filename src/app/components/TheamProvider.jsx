"use client";
import { useState } from "react";
import TheamContext from "../coontext/TheamContext";
import React from "react";

const TheamProvider = ({ children }) => {
  const [theme, setTheame] = useState("light");
  const toggleTheam = () => {
    setTheame((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <TheamContext.Provider value={{ theme, toggleTheam }}>
      {children}
    </TheamContext.Provider>
  );
};

export default TheamProvider;
