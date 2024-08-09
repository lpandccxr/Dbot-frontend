import "./Team.scss";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import sample from "../../assets/sample.png";
import { motion, useMotionValue } from "framer-motion";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
import { useEffect, useState } from "react";

export default function Team() {
  const [imgIndex, setImgIndex] = useState(0);
  const [dargging, setDargging] = useState(false);
  const [head, setHead] = useState(true);
  const [end, setEnd] = useState(false);
  const dragX = useMotionValue();

  useEffect(() => {
    if (imgIndex === 0) {
      setHead(true);
    } else if (imgIndex === memebrs.length - 1) {
      setEnd(true);
    } else {
      setHead(false);
      setEnd(false);
    }
  }, [imgIndex]);

  const dragStart = () => {
    setDargging(true);
  };

  const dargEnd = () => {
    setDargging(false);

    const x = dragX.get();

    if (x <= -50 && imgIndex < memebrs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= 50 && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const memebrs = [
    {
      name: "Dan",
      position: "Lead ML Engineer",
      avatar: sample,
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
    {
      name: "Raven",
      position: "Lead Front-end Developer",
      avatar: sample,
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
    {
      name: "Azka",
      position: "UX/UI Developer",
      avatar: sample,
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
    {
      name: "Elizabeth",
      position: "ML Engineer",
      avatar: sample,
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
    {
      name: "Sima",
      position: "Front-end Developer",
      avatar: sample,
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
    {
      name: "Blessy",
      position: "Front-end Developer",
      avatar: sample,
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
  ];
  return (
    <div className="team">
      <div className="hero__top">
        <span>Able</span>
      </div>
      <motion.div
        className="team__content"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="team__request">
          <h1>Meet the Team</h1>
          <p>
            We are bunch of passionate floks, each bringing our own unique
            skills to make greate things happen.
          </p>
          <form className="team__form">
            <div className="team__inputBox">
              <label>Feature</label>
              <input type="text" id="feature" name="feature" required />
            </div>
            <div className="team__inputBox">
              <label>Feedback</label>
              <textarea name="feedback" required />
            </div>
          </form>
        </div>

        <motion.div className="team__members">
          {memebrs.map((member, index) => (
            <motion.div
              className="team__member"
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: dragX }}
              onDragStart={dragStart}
              onDragEnd={dargEnd}
              animate={{
                translateX: `-${imgIndex * 115}%`,
                scale: imgIndex === index ? 1 : 0.9,
                opacity: imgIndex === index ? 1 : 0.7,
              }}
              transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
              }}
            >
              <img src={member.avatar} alt="avatar" />
              <div className="team__dec">
                <div className="team__position">
                  <h3>{member.name}</h3>
                  <Link style={{ textDecoration: "underline" }}>
                    {member.position}
                  </Link>
                </div>
                <p>{member.dec}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="team__buttons">
          <img
            src={back}
            alt="back"
            onClick={() => setImgIndex((pv) => pv - 1)}
            style={head ? { opacity: "0.7", pointerEvents: "none" } : {}}
          />
          <img
            src={forward}
            alt="forward"
            onClick={() => setImgIndex((pv) => pv + 1)}
            style={end ? { opacity: "0.7", pointerEvents: "none" } : {}}
          />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
