import "./Feature.scss";
import { motion } from "framer-motion";
import illustration from "../../assets/illustration.svg";
import transcript from "./../../assets/transcription.png";
import talkback from "./../../assets/speech.png";
import community from "./../../assets/community-img-bg.png";
import msg from "../../assets/msg.png";

export default function Feature({ toFeature }) {
  const firstOne = {
    image: transcript,
    title: "Transcription",
    dec: "The bot provides real-time transcription of spoken conversations into text,ensuring seamless communication.",
  };

  const secondOne = {
    image: talkback,
    title: "Speech to Speech",
    animate: "",
    dec: "The bot reads text-aloud and can also vocalize a user's response, enhancing interaction and engagement.",
  };

  const thridOne = {
    image: community,
    title: "Community",
    animate: msg,
    dec: "In addition to exceptional user support,we are an inclusive,friendly community that welcomes everyone.",
  };

  return (
    <motion.div ref={toFeature} className="features">
      <div className="features__container">
        <div className="features__top">
          <h2 className="features__title">
            How
            <img />
            <span style={{ color: "#8EB4FF" }}> Able</span> Makes Disord {}
            <span style={{ fontWeight: "600", color: "#C5F73A" }}>
              Accessible
            </span>{" "}
            for
            <span style={{ fontStyle: "italic" }}> Everyone.</span>
          </h2>
          <img src={illustration} alt="illustration" />
        </div>
        <div className="features__cards">
          <div className="features__cardOne features__cardHover features__card">
            <img src={firstOne.image} alt="image" />
            <div className="features__decOne">
              <h2>{firstOne.title}</h2>
              <p>{firstOne.dec}</p>
            </div>
          </div>
          <div className="features__cardContainer">
            <div className="features__cardTwo features__cardHover features__card">
              <img src={secondOne.image} alt="image" />
              <div className="features__decTwo">
                <h2>{secondOne.title}</h2>
                <p>{secondOne.dec}</p>
              </div>
            </div>
            <div className="features__cardTwo features__cardHover features__card">
              <img src={thridOne.image} alt="image" />
              <motion.img
                src={thridOne.animate}
                alt="msg"
                className="features__animate"
                animate={{ rotate: [0, 13, 10, -3, 0] }}
                transition={{
                  duration: 3.5,
                  times: [0, 0.1, 0.1, 1.8, 0.1, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <div className="features__decTwo">
                <h2>{thridOne.title}</h2>
                <p>{thridOne.dec}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
