import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  useEffect(() => {
    console.log(user);
  }, [user.name, user.email]);

  return (
    <div>
      <input
        type="text"
        name="name"
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        name="email"
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
      />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("render");
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{count}</h1>;
};

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));
    return () => {
      controller.abort();
    };
  }, []);
  return <div>Todo</div>;
};

export default UseEffectExample;
