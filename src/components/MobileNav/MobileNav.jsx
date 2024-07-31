import "./MobileNav.scss";
import menu from "../../assets/icons/menu.svg";
import playing from "../../assets/3d-animation.mp4";

export default function MobileNav({ setNav }) {
  return (
    <div className="mobileNav">
      <button className="mobileNav__menu" onClick={() => setNav("navbar__on")}>
        <img src={menu} />
      </button>
      <span>Able</span>
      <video
        className="mobileNav__vbg"
        src={playing}
        loop={true}
        autoPlay={true}
        muted={true}
      />
    </div>
  );
}
