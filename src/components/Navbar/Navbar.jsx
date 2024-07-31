import "./Navbar.scss";
import home from "../../assets/icons/home.png";
import command from "../../assets/icons/command.png";
import about from "../../assets/icons/about.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar({ set, nav }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleClick = (link) => {
    set("nav__off");
    navigate(link);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 480) {
      set("");
    }
  });

  return (
    <nav className={"navbar " + nav}>
      <button className="navbar__close" onClick={() => set("navbar__off")}>
        <span className="navbar__closebt">X</span> Close
      </button>
      <ul className="navbar__itemList">
        <li className="navbar__itemContainer" onClick={() => handleClick("/")}>
          <NavLink to="/">
            <img src={home} alt="Home" className="navbar__item" />
          </NavLink>
          <span className="navbar__tooltiptext">Home</span>
        </li>
        <li
          className="navbar__itemContainer"
          onClick={() => handleClick("/commands")}
        >
          <NavLink to="/commands">
            <img src={command} alt="Command" className="navbar__item" />
          </NavLink>
          <span className="navbar__tooltiptext">Command</span>
        </li>
        <li
          className="navbar__itemContainer"
          onClick={() => handleClick("/team")}
        >
          <NavLink to="/team">
            <img src={about} alt="About" className="navbar__item" />
          </NavLink>
          <span className="navbar__tooltiptext">About</span>
        </li>
      </ul>
    </nav>
  );
}
