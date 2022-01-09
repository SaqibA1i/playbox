import Navbar from "../navbar/Navbar";
import Home from "../Home/Home";
import BottomBar from "../BottomBar/BottomBar";
import fade from "../../files/images/bottom_fade.png";
import corner from "../../files/images/corner_fade.png";
import { useGameContext } from "../../context/context";
import { useEffect, useState } from "react";
import { stringify } from "querystring";
import { animateFadeZoomIn } from "../../utilities/helperFunctions";
export default function MainApp() {
  const [currBg, setCurrBg] = useState<string>("");
  const [prevBg, setPrevBg] = useState<string>("");
  const { currGame, prevGame } = useGameContext()!;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const loadImage = async (game: string, isCurr: boolean) => {
    const tempImage = await require("../../files/images/bg/" + game + ".jpg");
    if (isCurr) {
      setCurrBg(tempImage);
    } else {
      setPrevBg(tempImage);
    }
  };

  useEffect(() => {
    loadImage(currGame, true);
    loadImage(prevGame, false);
    animateFadeZoomIn("bg1", "fadeAnim reverse", 200);
    animateFadeZoomIn("bg2", "fadeAnim", 200);
  }, [currGame]);

  return (
    <div className="App">
      <img className="bg1" src={prevBg} />
      <img className="bg2" src={currBg} />
      <img className="fade" src={fade} />
      <img className="corner-fade" src={corner} />
      <Navbar />
      <Home />
      <BottomBar />
    </div>
  );
}
