import "./Team.scss";
import Footer from "../../components/Footer/Footer";
import raven from "../../assets/team/raven.jpg";
import dan from "../../assets/team/dan.png";
import azka from "../../assets/team/azka.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";
import { motion, useMotionValue } from "framer-motion";
import back from "../../assets/icons/back.svg";
import forward from "../../assets/icons/forward.svg";
import { useEffect, useRef, useState } from "react";

export default function Team() {
  const [imgIndex, setImgIndex] = useState(0);
  const [dargging, setDargging] = useState(false);
  const [head, setHead] = useState(true);
  const [end, setEnd] = useState(false);
  const dragX = useMotionValue();
  const top = useRef(null);

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
      position: "Organizer, ML Engineer",
      avatar: dan,
      bg: "#83A3E0",
      linkedin: "https://www.linkedin.com/in/-danhan-/",
      github: "https://github.com/lpandccxr",
      email: "geoman970@gmail.com",
      dec: "Passionate engineer, dedicated to creating the best products with the most impact. I work on the backend and ML.",
    },
    {
      name: "Raven",
      position: "Lead Frontend Developer",
      avatar: raven,
      bg: "",
      linkedin: "https://www.linkedin.com/in/raven-lei/",
      github: "https://github.com/lpandccxr",
      email: "lpreveton@gmail.com",
      dec: "Experienced front-end developer specializing in React, with a passion for building responsive, user-centric web applications.",
    },
    {
      name: "Azka",
      position: "UX/UI Developer",
      avatar: azka,
      bg: "#F52578",
      linkedin: "",
      github: "",
      email: "azkaabokhari27@gmail.com",
      dec: "I designed a cohesive brand identity for Able Bot, collaborated with the team on ideas and variations for an intuitive user experience.",
    },
  ];
  return (
    <div className="team">
      <div className="team__container">
        <div className="hero__top" ref={top}>
          <span>Able</span>
        </div>
        <motion.div
          className="team__content"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="team__request">
            <span>
              Get to Know the{" "}
              <span style={{ color: "#83A3E0" }}> Proficient </span>
              <span style={{ color: "#C5F73A" }}>Team</span> Behind
              <span style={{ color: "#F52578" }}> Able</span>.
            </span>
            <p>
              We&apos; d love to hear what you think about <span>Able</span>
            </p>
            <form className="team__form">
              <div className="team__inputBox">
                <label>Your Email</label>
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
                  opacity: imgIndex === index ? 1 : 0.3,
                }}
                transition={{
                  type: "spring",
                  mass: 3,
                  stiffness: 400,
                  damping: 50,
                }}
              >
                <img
                  src={member.avatar}
                  alt="avatar"
                  style={
                    member.bg.length > 0
                      ? {
                          backgroundColor: `${member.bg}`,
                        }
                      : {}
                  }
                />
                <div className="team__dec">
                  <div className="team__position">
                    <div className="team__social">
                      {member.github.length > 0 && (
                        <a href={member.github} target="_blank">
                          <img src={github} alt="github" />
                        </a>
                      )}
                      {member.linkedin.length > 0 && (
                        <a href={member.linkedin} target="_blank">
                          <img src={linkedin} alt="linkedin" />
                        </a>
                      )}
                      <a href={`mailto: ${member.email}`} target="_blank">
                        <img src={email} alt="email" />
                      </a>
                    </div>
                    <h3>{member.name}</h3>
                    <span style={{ textDecoration: "underline" }}>
                      {member.position}
                    </span>
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
      </div>

      <Footer top={top} />
    </div>
  );
}
