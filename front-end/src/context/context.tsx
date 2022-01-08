import React, { useState } from "react";
import { Game } from "../utilities/Types";

export type playBox = {
  bg: any;
  setBg: any;
  ogGameList: Game;
  gameList: Game;
  setGameList: (games: Game) => void;
  currGame: string;
  setCurr: (name: string) => void;
};

export const Context = React.createContext<playBox | undefined>(undefined);

export const useGameContext = () => React.useContext(Context);
