import { Search, GearFill, PersonCircle } from "react-bootstrap-icons";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section">
        <p>Games</p>
      </div>
      <div className="right-section">
        <span>
          <Search />
        </span>
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
