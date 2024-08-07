import "./Hero.scss";
import playing from "../../assets/3d-animation.mp4";
import discord from "../../assets/icons/discord.png";
import arrow from "../../assets/icons/arrow.svg";
import landing from "../../assets/landing.jpg";
import next from "../../assets/icons/next.png";
import { motion } from "framer-motion";

export default function Hero({ theRef, top }) {
  const handleNext = () => {
    theRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="hero" ref={top}>
      <div className="hero__left">
        <div className="hero__container">
          <div className="hero__top">
            <span>Able</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
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
                <div className="hero__next" onClick={handleNext}>
                  <span>See all features</span>
                  <div>
                    <img src={next} alt="next" className="hero__nextbt" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="hero__right"
        initial={{ opacity: 0, right: -500 }}
        animate={{ opacity: 1, right: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        <video
          className="hero__video"
          src={playing}
          loop={true}
          autoPlay={true}
          muted={true}
        />
      </motion.div>
    </main>
  );
}
