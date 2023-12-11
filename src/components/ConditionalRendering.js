import { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <div className="conditionalRendering">
      <div>{isLoggedIn ? "已登入" : "未登入"}</div>
      <button onClick={handleClick}> {isLoggedIn ? "登出" : "登入"}</button>
    </div>
  );
}

export default ConditionalRendering;
