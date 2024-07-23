import "./Navbar.scss";
import home from "../../assets/icons/home.png";
import command from "../../assets/icons/command.png";
import about from "../../assets/icons/about.png";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState({});
  return (
    <nav className="navbar" style={nav}>
      <button
        className="navbar__close"
        onClick={() => setNav({ left: "-60%" })}
      >
        <span className="navbar__closebt">X</span> Close
      </button>
      <ul className="navbar__itemList">
        <li className="navbar__itemContainer">
          <a href="#home">
            <img src={home} alt="Home" className="navbar__item" />
          </a>
          <span className="navbar__tooltiptext">Home</span>
        </li>
        <li className="navbar__itemContainer">
          <a href="#command">
            <img src={command} alt="Command" className="navbar__item" />
          </a>
          <span className="navbar__tooltiptext">Command</span>
        </li>
        <li className="navbar__itemContainer">
          <a href="about">
            <img src={about} alt="About" className="navbar__item" />
          </a>
          <span className="navbar__tooltiptext">About</span>
        </li>
      </ul>
    </nav>
  );
}
