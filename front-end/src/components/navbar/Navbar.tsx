import { useRef } from "react";
import { Search, GearFill, PersonCircle } from "react-bootstrap-icons";
import { useGameContext } from "../../context/context";
import { Game } from "../../utilities/Types";
export default function Navbar() {
  const { gameList, setGameList, ogGameList } = useGameContext()!;
  const inputRef = useRef(null);

  const gameListSearcher = () => {
    let newSearch = (inputRef.current! as HTMLInputElement).value;
    let newGameList: Game = {};
    for (let g in ogGameList) {
      if (g.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())) {
        newGameList[g] = ogGameList[g];
      }
    }
    setGameList(newGameList);
  };
  return (
    <div className="navbar">
      <div className="left-section">
        <p>Games</p>
      </div>
      <div className="right-section">
        <input
          type={"text"}
          placeholder="Search..."
          onChange={gameListSearcher}
          ref={inputRef}
        />
        <span>
          <GearFill />
        </span>
        <span>
          <PersonCircle />
        </span>
        <span>4:43PM</span>
      </div>
    </div>
  );
}
