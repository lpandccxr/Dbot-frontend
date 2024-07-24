import "./Hero.scss";
import playing from "../../assets/3d-animation.mp4";
import discord from "../../assets/icons/discord.png";
import arrow from "../../assets/icons/arrow.svg";
import landing from "../../assets/landing.jpg";
import next from "../../assets/icons/next.png";
import menu from "../../assets/icons/menu.svg";

export default function Hero({ setNav }) {
  return (
    <main className="hero">
      <div className="hero__left">
        <div className="hero__top">
          <button className="hero__menu" onClick={() => setNav({ left: "0" })}>
            <img src={menu} />
          </button>
          Able
          <video
            className="hero__vbg"
            src={playing}
            loop={false}
            autoPlay={false}
            muted={true}
          />
        </div>
        <h1 className="hero__title">
          <img className="hero__discord" src={discord} alt="discord" /> bot
          built for<span> d</span>isabled folks.
          <button className="hero__button">
            Get Started
            <img className="hero__arrow" src={arrow} />
          </button>
        </h1>
        <div className="hero__landing">
          <img className="hero__landimg" src={landing} alt="landing" />
          <div className="hero__landdec">
            <p>
              A discord bot made for disabled/ partially disabled people to
              communicate on discord with ease, efficiently.
            </p>
            <div className="hero__tabs">
              <div className="hero__tab">Read Text</div>
              <div className="hero__quarter" />
              <div className="hero__tab">Transcribe text</div>
            </div>
            <div className="hero__next">
              <span>See all features</span>
              <a href="#features">
                <img src={next} alt="next" className="hero__nextbt" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <video
        className="hero__right"
        src={playing}
        loop={false}
        autoPlay={false}
        muted={true}
      />
    </main>
  );
}
