import { useState } from "react";
import { useGameContext } from "../../context/context";

type entryProps = {
  imgSrc: any;
  bg: any;
};

export default function Entry(Props: entryProps) {
  const [inFocus, setFocus] = useState<boolean>(false);
  const { setBg } = useGameContext()!;

  return (
    <div className="entry-wrap">
      <div className="entry-container">
        <img
          className="entry"
          onMouseOver={() => {
            setBg(Props.bg);
            setFocus(true);
          }}
          onMouseLeave={() => {
            setFocus(false);
          }}
          src={Props.imgSrc}
        />
      </div>
      <p className={inFocus ? "game-name" : "hide"}>Assassin's Creed</p>
    </div>
  );
}
