import "./Team.scss";
import Footer from "../../components/Footer/Footer";
import sample from "../../assets/sample.png";
import raven from "../../assets/team/raven.jpg";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";
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
      linkedin: "https://www.linkedin.com/in/ravenlei/",
      github: "https://github.com/lpandccxr",
      email: "lpreveton@gmail.com",
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
    {
      name: "Raven",
      position: "Lead Frontend Developer",
      avatar: raven,
      linkedin: "https://www.linkedin.com/in/raven-lei/",
      github: "https://github.com/lpandccxr",
      email: "lpreveton@gmail.com",
      dec: "Experienced front-end developer specializing in React, Node.js, Sass, Next.js, and Tailwind CSS, with a passion for building responsive, user-centric web applications.",
    },
    {
      name: "Azka",
      position: "UX/UI Developer",
      avatar: sample,
      linkedin: "https://www.linkedin.com/in/ravenlei/",
      github: "https://github.com/lpandccxr",
      email: "lpreveton@gmail.com",
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
    {
      name: "Elizabeth",
      position: "ML Engineer",
      avatar: sample,
      linkedin: "https://www.linkedin.com/in/ravenlei/",
      github: "https://github.com/lpandccxr",
      email: "lpreveton@gmail.com",
      dec: "You can see how this is so much nicer to look at. You will get the whitespace included in the string, but since we're just creating HTML markup, it doesn't really matter.",
    },
  ];
  return (
    <div className="team">
      <div className="team__container">
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
            <span>
              Get to Know the Proficient <span>Team</span> Behind
              <span> Able</span>.
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
                <img src={member.avatar} alt="avatar" />
                <div className="team__dec">
                  <div className="team__position">
                    <div className="team__social">
                      <a href={member.github} target="_blank">
                        <img src={github} alt="github" />
                      </a>
                      <a href={member.linkedin} target="_blank">
                        <img src={linkedin} alt="linkedin" />
                      </a>
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

      <Footer />
    </div>
  );
}
