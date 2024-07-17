import "./Navbar.scss";
import home from "../../assets/icons/home.png";
import command from "../../assets/icons/command.png";
import about from "../../assets/icons/about.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__itemList">
        <li>
          <img src={home} alt="Home" className="navbar__item" />
        </li>
        <li>
          <img src={command} alt="Command" className="navbar__item" />
        </li>
        <li>
          <img src={about} alt="About" className="navbar__item" />
        </li>
      </ul>
    </nav>
  );
}
