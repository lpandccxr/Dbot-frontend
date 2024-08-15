import Footer from "../../components/Footer/Footer";
import group from "../../assets/icons/group.svg";
import meteor from "../../assets/icons/meteor.svg";
import pices from "../../assets/icons/pices.svg";
import star from "../../assets/icons/star.svg";
import Command from "../../components/Command/Command";
import "./Commands.scss";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Commands() {
  const commands = [
    {
      command: "!join",
      description: "bot joins a voice channel.",
      type: "Note: ",
      note: "channel is case sensitive.",
      example: "!join General",
      color: "#C5F73A",
    },
    {
      command: "!strac",
      description:
        "bot sets transcription channel to send voice transcriptions to.",
      type: "Note: ",
      note: "channel is case sensitive.",
      example: "!stc general",
      color: "#8E84FF",
    },
    {
      command: "!rec",
      description: "bot starts recording.",
      type: "Prerequisite: ",
      note: "bot must already be in a voice channel.",
      example: "!rec",
      color: "#F52578",
    },
    {
      command: "!sttsc",
      description:
        "bot sets text to speech channel, typically the same as transcription channel",
      note: "",
      example: "!sttsc general",
      color: "#F1F1F1",
    },
    {
      command: "!startts",
      description: "bot starts text to speech.",
      type: "Prerequisite: ",
      note: "bot must already be in a voice channel.",
      example: "!startts",
      color: "#C5F73A",
    },
    {
      command: "!storec",
      description:
        "bot stops recording all currently active voices, does not transcribe previously active voices. Optional list of voices to stop recording, prevents future recording and transcribing",
      note: "",
      example: "!storec, !storec danhan Raven elizabeth",
      color: "#F52578",
    },
    {
      command: "!disconnect",
      description:
        "bot disconnects (removes itself) from current voice channel.",
      type: "Prerequisite: ",
      note: "bot must already be in a voice channel.",
      example: "!disconnect",
      color: "#F1F1F1",
    },
    {
      command: "!enavc",
      description: "bot enables voice commands, bot will start recording.",
      type: "Prerequisite: ",
      note: "bot must already be in a voice channel.",
      example: "!enavc",
      color: "#C5F73A",
    },
  ];

  const top = useRef(null);

  return (
    <div className="commands">
      <div className="commands__container">
        <div className="commands__content">
          <div className="commands__top" ref={top}>
            <div className="commands__title">
              <h1>Commands List</h1>
              <img src={meteor} alt="meteor" />
            </div>
            <div className="commands__pics">
              <div className="commands__iconGp">
                <img src={pices} alt="pices" />
                <img src={star} alt="star" className="commands__star" />
              </div>

              <img src={group} alt="group" />
            </div>
          </div>
          <motion.div
            className="commands__list"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {commands.map((command, index) => (
              <Command command={command} index={index} key={index} />
            ))}
          </motion.div>
        </div>
      </div>
      <Footer top={top} />
    </div>
  );
}
