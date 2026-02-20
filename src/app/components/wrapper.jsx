"use client";
import React from "react";
import TheamProvider from "./TheamProvider";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import TheamContext from "../coontext/TheamContext";
const Wrapper = () => {
  const ThemeToglerButton = () => {
    const { toggleTheam } = useContext(TheamContext);
    return <button onClick={toggleTheam}>Toggle Theme</button>;
  };
  return (
    <div>
      <TheamProvider>
        <Header />
        <ThemeToglerButton />
        <Footer />
      </TheamProvider>
    </div>
  );
};

export default Wrapper;
