import "./Hero.scss";
import icons from "../../assets/icons/titleIcons.svg";
import underline from "../../assets/underline.svg";
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
              Empowering
              <span
                style={{
                  color: "#F52578",
                  display: "flex",
                  alignContent: "center",
                }}
              >
                Disabled
                <img src={icons} alt="discord" className="hero__discord" />
              </span>
              Individuals with
              <span style={{ color: "#8EB4FF", fontWeight: "500" }}>
                {" "}
                Able Bot.
              </span>
              <img
                src={underline}
                alt="underline"
                className="hero__underline"
              />
            </h1>
            <p>
              Discord bot designed to empower disabled and partially disabled
              users by making communication seamless and efficient
            </p>
            <a
              href=" https://discord.com/oauth2/authorize?client_id=1271565367910862910&permissions=33411&integration_type=0&scope=bot"
              target="_blank"
            >
              <span>Invite bot</span>
              <img src={arrow} alt="arrow" />
            </a>
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
