import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //increase
  const increase = () => {
    setCount((count) => count + 1);
  };

  //decrease
  const decrease = () => {
    setCount((preCount) => {
      if (preCount <= 0) return preCount;
      return preCount - 1;
    });
  };

  //reset
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <div className="counter_ttl">計數器</div>
      <div className="counter_display">{count}</div>
      <div className="counter_btn">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
