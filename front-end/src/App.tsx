import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./scss/main.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import { Context } from "./context/context";
import bg1 from "./files/images/temp.jpg";
import MainApp from "./components/MainApp/MainApp";
import { Game } from "./utilities/Types";
import Data from "./data.json";

function App() {
  const [bg, setBg] = useState<any>(bg1);
  const [gameList, setGameList] = useState<Game>({});
  const [currGame, setCurr] = useState<string>("");
  const [ogGameList, setogGameList] = useState<Game>({});

  const setGameListHelper = (games: Game) => {
    setGameList(games);
  };
  const setCurrHelper = (name: string) => {
    setCurr(name);
  };

  useEffect(() => {
    setGameList(Data);
    setogGameList(Data);
  }, []);
  return (
    <Context.Provider
      value={{
        bg: bg,
        setBg: setBg,
        gameList: gameList,
        setGameList: setGameListHelper,
        currGame: currGame,
        setCurr: setCurrHelper,
        ogGameList: ogGameList
      }}
    >
      <MainApp />
    </Context.Provider>
  );
}

export default App;
