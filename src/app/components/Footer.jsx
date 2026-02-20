import React from "react";
import { useContext } from "react";
import TheamContext from "../coontext/TheamContext";
const Footer = () => {
  const { theme } = useContext(TheamContext);
  return (
    <div
      className={`footer ${theme === "dark" ? "bg-amber-950 text-amber-200" : "bg-white"}`}
    >
      Footer theme: {theme}
    </div>
  );
};

export default Footer;
