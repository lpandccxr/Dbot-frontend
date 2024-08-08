import "./AddDiscord.scss";
import message from "../../assets/message.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AddDiscord() {
  return (
    <motion.div className="discord">
      <div className="discord__container">
        <div className="discord__title">
          <p>
            Add <span>Able Bot</span> to your discord and get conversating
          </p>
          <Link className="discord__link" to="/commands">
            Add to discord
          </Link>
        </div>
        <img src={message} alt="message" className="discord__img" />
      </div>
    </motion.div>
  );
}
