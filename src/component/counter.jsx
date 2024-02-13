import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  // useEffect(() => {
  //   console.log("mounting");
  // }, []);
  // useEffect(() => {
  //   console.log("update phase");
  // }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "2rem" }}>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
