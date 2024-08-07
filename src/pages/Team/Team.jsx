import "./Team.scss";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import sample from "../../assets/sample.png";
import { motion } from "framer-motion";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
import { useRef } from "react";

export default function Team() {
  const memberRef = useRef(null);

  const scrollMember = (move) => {
    memberRef.current.scrollBy(move);
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

        <div className="team__members" ref={memberRef}>
          {memebrs.map((member, index) => (
            <motion.div
              className="team__member"
              key={index}
              initial={{ scale: 0.9, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ root: memberRef, amount: 1 }}
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
        </div>
        <div className="team__buttons">
          <img
            src={back}
            alt="back"
            onClick={() =>
              scrollMember({
                top: 0,
                left: -100,
                behavior: "smooth",
              })
            }
          />
          <img
            src={forward}
            alt="forward"
            onClick={() =>
              scrollMember({
                top: 0,
                left: 100,
                behavior: "smooth",
              })
            }
          />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
