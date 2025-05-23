import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Analytics from "./components/Analytics.jsx";
import NewsLetter from "./components/Newsletter.jsx";
import Cards from "./components/Cards.jsx";

import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
    </>
  );
}

export default App;
