import { useGameContext } from "../../context/context";
import Entry from "../EntrySub/Entry";
import { Carousel } from "react-responsive-carousel";
export default function Home() {
  const { currGame, setCurr } = useGameContext()!;
  const { gameList } = useGameContext()!;
  const getConfigurableProps: any = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: true,
    axis: "horizontal",
    infiniteLoop: false,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: true,
    dynamicHeight: false,
    swipeable: true,
    emulateTouch: true,
    thumbWidth: 200,
    interval: 10,
    transitionTime: 200,
    swipeScrollTolerance: 50,

    preventMovementUntilSwipeScrollTolerance: true
  });

  return (
    <div className="home">
      <Carousel
        {...getConfigurableProps()}
        onClickItem={(index) => {
          (
            document.getElementsByClassName("control-dots")[0].childNodes[
              index
            ] as HTMLBodyElement
          ).click();
          let statusElement = document.getElementsByClassName("slide")[
            index
          ] as HTMLBodyElement;
          let newCurr = statusElement.innerText;
          console.log(newCurr);
          setCurr(newCurr);
        }}
        onChange={(index) => {
          let statusElement = document.getElementsByClassName(
            "slide selected"
          )[0] as HTMLBodyElement;
          let newCurr = statusElement.innerText;
          console.log(newCurr);
          setCurr(newCurr);
          let statusElement2 = document.getElementsByClassName(
            "slider animated"
          )[0] as HTMLBodyElement;
        }}
      >
        {Object.keys(gameList).map((game: string, idx: number) => (
          <Entry
            gameName={game}
            // styles={idx === 0 ? { marginLeft: "7vw" } : {}}
          />
        ))}
      </Carousel>
    </div>
  );
}
