import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Hero/Slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Hero></Hero>
    </>
  );
}

export default App;
