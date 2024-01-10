import { useContext } from "react";
import "./App.css";
import UserContainer from "./components/UserContainer";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";

function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
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
      <UserContainer />
    </div>
  );
}

export default App;
