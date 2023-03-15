import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(18);
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(
    (backgroundColor) => {
      if (counter < 22) {
        return setBackgroundColor("lightblue");
      } else if (counter < 28) {
        return setBackgroundColor("palegoldenrod");
      } else {
        return setBackgroundColor("crimson");
      }
    },
    [counter]
  );

  return (
    <div style={{ backgroundColor }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label className="halfLabel">
            Build a temperature control app where users can increment or
            decrement temperature and the background color changes based on
            temperature.
          </label>
          <p className="lines">
            ---------------------------------------------------
          </p>
          <p className="appTitle">This is a Temperature Control App</p>
          <label className="counter">{counter}</label>
          <p className="counterTitle">Temperature °C</p>
          <div>
            <button className="button" onClick={() => setCounter(counter + 1)}>
              +
            </button>
            <button className="button" onClick={() => setCounter(counter - 1)}>
              -
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
