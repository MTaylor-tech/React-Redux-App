import React from "react";
import "./App.css";
import Beer from "./components/Beer";

export default function App() {
  return (
    <div className="App">
      <img src="BrewDog-Logo.jpg" alt="Brew Dog" />
      <Beer />
    </div>
  );
}
