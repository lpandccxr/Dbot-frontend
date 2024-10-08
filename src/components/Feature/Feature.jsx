import "./Feature.scss";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import illustration from "../../assets/illustration.svg";
import transcript from "./../../assets/transcription.png";
import talkback from "./../../assets/speech.png";
import community from "./../../assets/community-img-bg.png";
import msg from "../../assets/msg.png";
import v1 from "../../assets/icons/Variant1.png";
import v2 from "../../assets/icons/Variant2.png";
import able from "../../assets/icons/able2.svg";
import disord from "../../assets/icons/able.svg";
import like from "../../assets/like.svg";

export default function Feature({ toFeature }) {
  const firstOne = {
    image: transcript,
    title: "Transcription",
    dec: "The bot provides real-time transcription of spoken conversations into text, ensuring seamless communication.",
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
            <div style={{ position: "relative" }}>
              <img
                src={firstOne.image}
                alt="image"
                className="features__imgOne"
              />
              <div className="features__window">
                <div style={{ height: "100%" }}>
                  <img src={disord} alt="disord" style={{ width: "50px" }} />
                </div>
                <div style={{ width: "80%" }}>
                  <b>Able</b>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      marginLeft: "0.5rem",
                      backgroundColor: "#5865F2",
                      borderRadius: "10px",
                      padding: "0 0.3rem",
                      lineHeight: "1rem",
                    }}
                  >
                    BOT
                  </span>
                  <div className="features__typing">
                    <span>
                      <b>Person 1: </b>
                      <ReactTyped
                        strings={[
                          "Please transcript &quot;Hello world&quot; to voice message.",
                        ]}
                        typeSpeed={100}
                        backSpeed={20}
                        loop
                      />
                    </span>
                  </div>
                  <img
                    src={like}
                    alt="like"
                    style={{ position: "absolute", bottom: "5%" }}
                  />
                </div>
              </div>
            </div>
            <div className="features__decOne">
              <h2>{firstOne.title}</h2>
              <p>{firstOne.dec}</p>
            </div>
          </div>
          <div className="features__cardContainer">
            <div className="features__cardTwo features__cardHover features__card">
              <div className="features__imgTwo">
                <img src={secondOne.image} alt="image" />
                <div className="features__twoAni">
                  <img src={v1} alt="v1" />
                  <img src={v2} alt="v2" />
                  <img src={able} alt="able" />
                </div>
              </div>
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
