import Footer from "../../components/Footer/Footer";
import "./Commands.scss";
import { motion } from "framer-motion";

export default function Commands() {
  const list = [
    {
      command: "/text",
      dec: "The bot provides transcription.",
      style: {
        background:
          "linear-gradient(90deg, rgba(114, 137, 218, 20%) 0%, rgba(255, 194, 194, 20%) 100%), linear-gradient(#333030, #333030)",
        gridArea: "1/1/2/2",
      },
    },
    {
      command: "/text",
      dec: "The bot provides transcription.",
      style: {
        background:
          "linear-gradient(90deg, rgba(178, 219, 207, 20%) 63%, rgba(114, 137, 218, 20%) 100%), linear-gradient(#333030, #333030)",
        gridArea: "2/1/3/2",
      },
    },
    {
      command: "/text",
      dec: "The bot provides transcription.",
      style: {
        background:
          "linear-gradient(90deg, rgba(114, 137, 218, 20%) 0%, rgba(255, 194, 194, 20%) 100%), linear-gradient(#333030, #333030)",
        gridArea: "3/1/4/2",
      },
    },
    {
      command: "/text",
      dec: "The bot provides transcription.",
      style: {
        background:
          "linear-gradient(90deg, rgba(114, 137, 218, 20%) 0%, rgba(255, 194, 194, 20%) 100%), linear-gradient(#333030, #333030)",
        gridArea: "4/1/5/2",
      },
    },
    {
      command: "/read",
      dec: "The bot reads transcription.",
      style: {
        background:
          "linear-gradient(90deg, rgba(181, 228, 214, 20%) 41%, rgba(255, 194, 194, 20%) 100%), linear-gradient(#333030, #333030)",
        gridArea: "1/2/2/3",
      },
    },
    {
      command: "/read",
      dec: "The bot reads transcription.",
      style: {
        background:
          "linear-gradient(90deg, rgba(181, 228, 214, 20%) 41%, rgba(255, 194, 194, 20%) 100%), linear-gradient(#333030, #333030)",
        gridArea: "2/2/3/3",
      },
    },
    {
      command: "/read",
      dec: "The bot reads transcription.",
      style: {
        background:
          "linear-gradient(90deg, rgba(181, 228, 214, 20%) 41%, rgba(255, 194, 194, 20%) 100%), linear-gradient(#333030, #333030)",
        gridArea: "3/2/4/3",
      },
    },
    {
      command: "/read",
      dec: "The bot reads transcription.",
      style: {
        background:
          "linear-gradient(90deg, rgba(181, 228, 214, 20%) 41%, rgba(255, 194, 194, 20%) 100%), linear-gradient(#333030, #333030)",
        gridArea: "4/2/5/3",
      },
    },
  ];
  return (
    <div className="commands">
      <div className="hero__top">
        <span>Able</span>
      </div>
      <div className="commands__container">
        <h1 className="commands__title">
          Commands <span>l</span>ist
        </h1>
        <motion.div
          className="commands__list"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {list.map((item, index) => (
            <div className="commands__item" style={item.style} key={index}>
              <h4>{item.command}</h4>
              <span>{item.dec}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
