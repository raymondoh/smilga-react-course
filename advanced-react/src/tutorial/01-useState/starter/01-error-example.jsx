import { useState } from "react";
const ErrorExample = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(prev => {
      return prev + 1;
    });
  };
  return (
    <div>
      <h2>useState error example</h2>
      <button onClick={handleIncrease} className="btn">
        increase count
      </button>

      <p>{count}</p>
    </div>
  );
};

export default ErrorExample;
