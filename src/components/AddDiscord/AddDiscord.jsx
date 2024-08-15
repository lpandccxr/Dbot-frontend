import "./AddDiscord.scss";
import { motion } from "framer-motion";
import combine from "../../assets/combine.svg";
import sign from "../../assets/sign.svg";
import able from "../../assets/icons/able.svg";

export default function AddDiscord() {
  return (
    <motion.div className="discord">
      <div className="discord__container">
        <div className="discord__title">
          <p>
            Add <b style={{ color: "#C5F73A" }}>Able Bot</b> to your discord
            today and get <b style={{ color: "#F52578" }}>conversating!</b>
          </p>
          <div style={{ display: "flex", alignItems: "end" }}>
            <img
              src={able}
              alt="able"
              style={{ width: "15%", marginRight: "5%" }}
            />
            <a
              href=" https://discord.com/oauth2/authorize?client_id=1271565367910862910&permissions=33411&integration_type=0&scope=bot"
              target="_blank"
              className="discord__link"
              to="/commands"
            >
              Invite bot
            </a>
          </div>
        </div>
        <div className="discord__animate">
          <img src={combine} alt="combine" />
          <motion.img
            src={sign}
            alt="sign"
            animate={{ translateY: [0, -25, -25, 0] }}
            transition={{
              duration: 3.5,
              times: [0, 0.2, 0.3, 1.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
