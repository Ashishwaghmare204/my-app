"use client";
import React from "react";
import CounterContext from "../coontext/CounterContext";
import { useState } from "react";

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <CounterContext.Provider value={{ counter, setCounter }}>
        {children}
      </CounterContext.Provider>
    </div>
  );
};

export default CounterProvider;
