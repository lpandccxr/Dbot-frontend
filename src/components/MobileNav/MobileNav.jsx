import "./MobileNav.scss";
import menu from "../../assets/icons/menu.svg";

export default function MobileNav({ setNav }) {
  return (
    <div className="mobileNav">
      <button className="mobileNav__menu" onClick={() => setNav("navbar__on")}>
        <img src={menu} />
      </button>
      <span>Able</span>
    </div>
  );
}
