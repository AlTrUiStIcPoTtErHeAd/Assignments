import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <div className="counter-display">{count}</div>
      <div className="button-container">
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <button className="counter-button" onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className="counter-button reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
