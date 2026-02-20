"use client";
import React from "react";
import { useContext } from "react";
import CounterContext from "../coontext/CounterContext";

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div className="w-full justify-center align-center m-3.5 p-4 border-amber-500 border-2">
      <h1 className="header text-2xl text-amber-500 justify-center align-center">
        Count is {counter}
      </h1>
      <button
        className="border border-blue-500 p-2 m-2 rounded  shadow-amber-200 cursor-pointer"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        className="border border-red-500 p-2 m-2 rounded shadow-amber-200 cursor-pointer"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
