import { useEffect, useState } from "react";
import { useGameContext } from "../../context/context";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateFadeZoomIn } from "../../utilities/helperFunctions";

export default function BottomBar() {
  const [currBg, setCurrBg] = useState<string>("");
  const [prevBg, setPrevBg] = useState<string>("");

  const { currGame, prevGame } = useGameContext()!;

  const loadImage = async (game: string, isCurr: boolean) => {
    const tempImage = await require("../../files/images/clearLogo/" +
      game +
      ".png");
    if (isCurr) {
      setCurrBg(tempImage);
    } else {
      setPrevBg(tempImage);
    }
  };

  useEffect(() => {
    loadImage(currGame, true);
    animateFadeZoomIn("currLogo", "fadeAnim", 400);
  }, [currGame]);

  return (
    <div className="bottom-section">
      <div className="logo">
        <img className="currLogo" src={currBg} />
      </div>
      <div className="play" tabIndex={0}>
        Play
      </div>
    </div>
  );
}
