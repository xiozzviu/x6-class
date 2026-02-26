import { useState } from "react";
// import { motion } from "motion/react"
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";

function App() {
  return (
    <>
      <h1 className="text-white">test</h1>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
