import React, { useState } from "react";

const UseStateExample = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;
    console.log(inputName, value);
    setUser({ ...user, [inputName]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="name" type="text"></input>
      <input onChange={handleChange} name="email" type="text"></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default UseStateExample;
