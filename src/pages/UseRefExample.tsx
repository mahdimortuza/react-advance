import { useEffect, useRef } from "react";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <div>
      <form>
        <input ref={myRef} name="name" type="text"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
