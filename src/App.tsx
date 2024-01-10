import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  const { dark, setDark } = useContext(ThemeContext);
  console.log(dark);
  return (
    <div
      className={`h-screen w-full justify-center items-center ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      <button
        className="bg-orange-500 px-5 py-2 rounded-lg text-white"
        onClick={() => setDark(!dark)}
      >
        toggle
      </button>
      {/* <UseRefExample /> */}
    </div>
  );
}

export default App;
