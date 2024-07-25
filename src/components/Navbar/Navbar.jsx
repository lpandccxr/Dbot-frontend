import "./Navbar.scss";
import home from "../../assets/icons/home.png";
import command from "../../assets/icons/command.png";
import about from "../../assets/icons/about.png";
import { useState, useEffect } from "react";

export default function Navbar({ set, nav }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
