import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Couter from "./Counter";
import CounterDetail from "./CounterDetail";

const Main = () => {
  return (
    <div className="App">
      <Couter />
      <br />
      <br />
      <br />
      {/* <CounterDetail /> */}
    </div>
  );
};

export default Main;
