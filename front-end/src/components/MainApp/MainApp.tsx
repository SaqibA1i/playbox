import Navbar from "../navbar/Navbar";
import Home from "../Home/Home";
import BottomBar from "../BottomBar/BottomBar";
import fade from "../../files/images/bottom_fade.png";
import corner from "../../files/images/corner_fade.png";

import { useGameContext } from "../../context/context";
import { useEffect, useState } from "react";
export default function MainApp() {
  const [bg, setBg] = useState<string>("");
  const { currGame } = useGameContext()!;

  const loadImage = async () => {
    const tempImage = await require("../../files/images/bg/" +
      currGame +
      ".jpg");
    setBg(tempImage);
  };

  useEffect(() => {
    loadImage();
  }, [currGame]);

  return (
    <div className="App">
      <img className="bg" src={bg} />
      <img className="fade" src={fade} />
      <img className="corner-fade" src={corner} />
      <Navbar />
      <Home />
      <BottomBar />
    </div>
  );
}
