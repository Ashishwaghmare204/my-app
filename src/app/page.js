import React from "react";
import Wrapper from "./components/wrapper";
import Counter from "./components/Counter";
import CounterProvider from "./components/CounterProvider";

const page = () => {
  return (
    <div>
      {/* <Wrapper /> */}
      <CounterProvider>
        <Counter />
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default page;
