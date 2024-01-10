import { useRef } from "react";

const UseRefExample = () => {
  const myRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(myRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={myRef} name="name" type="text"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
