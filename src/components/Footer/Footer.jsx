import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow-footer.svg";
import "./Footer.scss";

export default function Footer({ top }) {
  return (
    <footer className="footer">
      <div className="footer__logo">Able</div>
      <div className="footer__right">
        <div
          className="footer__goTop"
          onClick={() => top.current.scrollIntoView({ behavior: "smooth" })}
        >
          <img src={arrow} alt="arrow" />
          <span>Go to top</span>
        </div>
        <div className="footer__links">
          <Link to="/team">Team</Link>
          <Link>Help</Link>
          <Link to="/commands">Commands List</Link>
          <Link>FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
