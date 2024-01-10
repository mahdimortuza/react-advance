import { useEffect, useRef } from "react";
import CustomInput from "../components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">useRef</h1>
      <form>
        <CustomInput ref={myRef} className={"border-blue-500"} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
