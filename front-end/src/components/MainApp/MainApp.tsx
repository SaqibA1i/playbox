import Navbar from "../navbar/Navbar";
import Home from "../Home/Home";

import fade from "../../files/images/bottom_fade.png";
import corner from "../../files/images/corner_fade.png";

import { useGameContext } from "../../context/context";
export default function MainApp() {
  const { bg } = useGameContext()!;
  return (
    <div className="App">
      <img className="bg" src={bg} />
      <img className="fade" src={fade} />
      <img className="corner-fade" src={corner} />
      <Navbar />
      <Home />
    </div>
  );
}
