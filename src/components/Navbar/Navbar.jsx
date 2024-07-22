import "./Navbar.scss";
import home from "../../assets/icons/home.png";
import command from "../../assets/icons/command.png";
import about from "../../assets/icons/about.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__close">
        <span className="navbar__closebt">X</span> Close
      </div>
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
