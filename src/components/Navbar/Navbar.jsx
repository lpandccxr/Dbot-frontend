import "./Navbar.scss";
import home from "../../assets/icons/home.png";
import command from "../../assets/icons/command.png";
import about from "../../assets/icons/about.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__itemList">
        <li>
          <a href="#home">
            <img src={home} alt="Home" className="navbar__item" />
            <span className="navbar__tooltiptext">Home</span>
          </a>
        </li>
        <li>
          <a href="#command">
            <img src={command} alt="Command" className="navbar__item" />
            <span className="navbar__tooltiptext">Command</span>
          </a>
        </li>
        <li>
          <a href="about">
            <img src={about} alt="About" className="navbar__item" />
            <span className="navbar__tooltiptext">About</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
