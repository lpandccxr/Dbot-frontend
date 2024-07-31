import "./Hero.scss";
import playing from "../../assets/3d-animation.mp4";
import discord from "../../assets/icons/discord.png";
import arrow from "../../assets/icons/arrow.svg";
import landing from "../../assets/landing.jpg";
import next from "../../assets/icons/next.png";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero__left">
        <div className="hero__container">
          <div className="hero__top">
            <span>Able</span>
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
              <img className="hero__landbg" src={landing} alt="landing" />
              <div className="hero__tabs">
                <button className="hero__tab">Read Text</button>
                <div className="hero__quarter" />
                <button className="hero__tab">Transcribe text</button>
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
      </div>
      <div className="hero__right">
        <video
          className="hero__video"
          src={playing}
          loop={true}
          autoPlay={false}
          muted={true}
        />
      </div>
    </main>
  );
}
