import "./Hero.scss";
import discord from "../../assets/icons/discord.png";
import arrow from "../../assets/icons/arrow.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import landing from "../../assets/landing.jpg";
import { motion } from "framer-motion";

export default function Hero({ theRef, top }) {
  const handleNext = () => {
    theRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="hero" ref={top}>
      <div className="hero__container">
        <div className="hero__top">
          <span>Ablebot</span>
        </div>
        <div className="hero__content">
          <motion.div
            className="hero__left"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
            <h1 className="hero__title">
              Empowering{" "}
              <span>
                Disabled{" "}
                <img src={discord} alt="discord" className="hero__discord" />{" "}
              </span>{" "}
              Individuals with Able Bot
            </h1>
            <p>
              Discord bot designed to empower disabled and partially disabled
              users by making communication seamless and efficient
            </p>
            <button>
              Get Started <img src={arrow} alt="arrow" />
            </button>
          </motion.div>
          <motion.div
            className="hero__right"
            initial={{ opacity: 0, right: -500 }}
            animate={{ opacity: 1, right: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          >
            <img src={landing} alt="landing" className="hero__image" />
            <div className="hero__next">
              <button onClick={handleNext}>
                <img src={arrowDown} alt="down" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
