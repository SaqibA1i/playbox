import { useEffect, useState } from "react";
import { useGameContext } from "../../context/context";

type entryProps = {
  gameName: string;
  styles?: any;
};

export default function Entry(Props: entryProps) {
  const { currGame, gameList, setCurr } = useGameContext()!;
  const [inFocus, setFocus] = useState<boolean>(false);
  const { setBg } = useGameContext()!;
  const [imageProp, setImage] = useState<string>("");

  const loadImage = async () => {
    const tempImage = await require("../../files/images/cover/" +
      Props.gameName +
      ".jpg");
    setImage(tempImage);
    console.log(imageProp);
  };

  useEffect(() => {
    loadImage();
  }, [gameList]);
  return (
    <div className={"entry-wrap"} style={{ ...Props.styles }}>
      <div
        className={
          currGame === Props.gameName
            ? "entry-container entry-hover"
            : "entry-container"
        }
      >
        <img
          className={currGame === Props.gameName ? "entry img-hover" : "entry"}
          onClick={() => {
            setCurr(Props.gameName);
          }}
          src={imageProp}
        />
      </div>
      <p className={currGame === Props.gameName ? "game-name" : "hide"}>
        {Props.gameName}
      </p>
    </div>
  );
}
