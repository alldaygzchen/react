import { useState } from "react";
const Counter = () => {
  console.log("render Counter component");
  const [count, setCount] = useState(0);
  return (
    <button
      className="btn"
      onClick={() => setCount(count + 1)}
      style={{ marginBottom: "1rem" }}
    >
      count {count}
    </button>
  );
};
export default Counter;
