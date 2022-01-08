import { useGameContext } from "../../context/context";
import Entry from "../EntrySub/Entry";

export default function Home() {
  const { gameList } = useGameContext()!;
  return (
    <div className="home">
      {Object.keys(gameList).map((game: string, idx: number) => (
        <Entry
          gameName={game}
          styles={idx === 0 ? { marginLeft: "7vw" } : {}}
        />
      ))}
    </div>
  );
}
