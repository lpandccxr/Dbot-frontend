import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow-footer.svg";
import "./Footer.scss";
import question from "../../assets/icons/Question.svg";
import hexagon from "../../assets/icons/Hexagon.svg";
import command from "../../assets/icons/Command.svg";

export default function Footer({ top }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          Ablebot<p>@2024 Ablebot</p>
        </div>
        <div className="footer__links">
          <Link className="footer__link">
            <img src={question} alt="question" />
            Help
          </Link>
          <Link className="footer__link" to="/team">
            <img src={hexagon} alt="team" />
            Team
          </Link>
          <Link className="footer__link" to="/commands">
            <img src={command} alt="command" />
            Commands
          </Link>
        </div>
        <div
          className="footer__goTop"
          onClick={() => top.current.scrollIntoView({ behavior: "smooth" })}
        >
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </footer>
  );
}
