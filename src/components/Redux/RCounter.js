import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RCounter() {
  const count = useSelector((state) => state.counter.count); 
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>

      {/* ✅ dispatch me string type use karo */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
