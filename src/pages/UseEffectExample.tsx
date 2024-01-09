import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log(count);
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffectExample;
