import React from "react";
import Food from "./components/Food";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  );
}

export default App;
