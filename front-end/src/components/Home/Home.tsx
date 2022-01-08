import Entry from "../EntrySub/Entry";
import one from "../../files/images/cover/(1).jpg";
import two from "../../files/images/cover/(2).jpg";
import three from "../../files/images/cover/(3).jpg";
import four from "../../files/images/cover/(4).jpg";

import oneT from "../../files/images/bg/ (1).jpg";
import twoT from "../../files/images/bg/ (2).jpg";
import threeT from "../../files/images/bg/ (3).jpg";
import fourT from "../../files/images/bg/ (4).jpg";

export default function Home() {
  return (
    <div className="home">
      <Entry imgSrc={one} bg={oneT} />
      <Entry imgSrc={two} bg={twoT} />
      <Entry imgSrc={three} bg={threeT} />
      <Entry imgSrc={four} bg={fourT} />
    </div>
  );
}
