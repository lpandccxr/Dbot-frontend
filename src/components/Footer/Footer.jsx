import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow-footer.svg";
import "./Footer.scss";

export default function Footer({ top }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          Ablebot<p>@2024 Ablebot</p>
        </div>
        <div className="footer__links">
          <Link className="footer__link" to="/team">
            Team
          </Link>
          <Link className="footer__link">Help</Link>
          <Link className="footer__link" to="/commands">
            Commands
          </Link>
        </div>
        <div
          className="footer__goTop"
          onClick={() => top.current.scrollIntoView({ behavior: "smooth" })}
        >
          <img src={arrow} alt="arrow" />
          <span>Go to top</span>
        </div>
      </div>
    </footer>
  );
}
