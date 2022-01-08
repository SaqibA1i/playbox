import React, { useState } from "react";

export type playBox = {
  bg: any;
  setBg: any;
};

export const Context = React.createContext<playBox | undefined>(undefined);

export const useGameContext = () => React.useContext(Context);
