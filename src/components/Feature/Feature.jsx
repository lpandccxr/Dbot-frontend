import "./Feature.scss";
import { motion } from "framer-motion";
import transcript from "./../../assets/features-transcription-img.png";
import talkback from "./../../assets/features-talkback-img.png";
import community from "./../../assets/features-community-img.png";

export default function Feature({ toFeature }) {
  const firstOne = {
    image: transcript,
    title: "Transcription",
    dec: "The bot provides real-time transcription of spoken conversations into text,ensuring seamless communication.",
  };

  const content = [
    {
      image: talkback,
      title: "Text to Speech",
      dec: "The bot reads text-aloud and can also vocalize a user's response,enhancing interaction.",
    },
    {
      image: community,
      title: "Community",
      dec: "In addition to exceptional user support,we are an inclusive,friendly community that welcomes everyone.",
    },
  ];

  return (
    <motion.div
      ref={toFeature}
      className="features"
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1, backgroundColor: "#f1f1f1" }}
      transition={{ duration: 2 }}
    >
      <div className="features__container">
        <div className="features__top">
          <h2 className="features__title">
            How Able Makes Disord{" "}
            <span style={{ fontWeight: "600" }}>Accessible</span> for
            <span style={{ fontStyle: "italic" }}> Everyone</span>
          </h2>
        </div>
        <div className="features__cards">
          <div className="features__cardOne features__cardHover">
            <img src={firstOne.image} alt="image" />
            <div className="features__decOne">
              <h2>{firstOne.title}</h2>
              <p>{firstOne.dec}</p>
            </div>
          </div>
          <div className="features__cardContainer">
            {content.map((item, index) => (
              <div
                className="features__cardTwo features__cardHover"
                key={index}
              >
                <img src={item.image} alt="image" />
                <div className="features__decTwo">
                  <h2>{item.title}</h2>
                  <p>{item.dec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
