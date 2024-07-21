import "./Footer.scss";
import logo from "../../assets/icons/logo.svg";
import arrow from "../../assets/icons/arrow-footer.svg";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <a href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>

          <div className="footer__arrow-mobile">
            <a className="footer__arrow-a" href="#">
              <img className="arrow" src={arrow} alt="arrow" />
              <a href="#">Go to top</a>
            </a>
          </div>
        </div>
        <div className="footer__second">
          <div className="footer__arrow-desktop">
            <a href="#">
              <img className="arrow" src={arrow} alt="arrow" />
              <a href="#">Go to top</a>
            </a>
          </div>
          <nav className="footer__nav">
            <div className="footer__nav-left">
            <a className="footer__a" href="#">
              Help
            </a>
            <a href="#">FAQ</a>
            </div>
            <div className="footer__nav-right">
            <a href="#">Commands List</a>
            <a className="footer__nav-team" href="#">Team</a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
