import { useEffect, useState } from "react";
import { useGameContext } from "../../context/context";
import clearLogo from "../../files/images/clearLogo/1.png";

export default function BottomBar() {
  const [logo, setLogo] = useState<string>("");
  const { currGame } = useGameContext()!;

  const loadImage = async () => {
    const tempImage = await require("../../files/images/clearLogo/" +
      currGame +
      ".png");
    setLogo(tempImage);
  };

  useEffect(() => {
    loadImage();
  }, [currGame]);

  return (
    <div className="bottom-section">
      <img src={logo} />
      <div className="play">Play</div>
    </div>
  );
}
