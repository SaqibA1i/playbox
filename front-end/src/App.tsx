import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import { Context } from "./context/context";
import bg1 from "./files/images/temp.jpg";
import MainApp from "./components/MainApp/MainApp";

function App() {
  const [bg, setBg] = useState<any>(bg1);
  return (
    <Context.Provider value={{ bg: bg, setBg: setBg }}>
      <MainApp />
    </Context.Provider>
  );
}

export default App;
