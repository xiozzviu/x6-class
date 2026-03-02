import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="text-white">test</h1>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
