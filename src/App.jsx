import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";

import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}
