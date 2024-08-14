import Footer from "../../components/Footer/Footer";
import copy from "../../assets/icons/copy.png";
import "./Commands.scss";
import { motion } from "framer-motion";

export default function Commands() {
  const commands = [
    {
      command: "!join",
      description: "bot joins a voice channel.",
      type: "Note: ",
      note: "channel is case sensitive.",
      example: "!join General",
    },
    {
      command: "!strac",
      description:
        "bot sets transcription channel to send voice transcriptions to.",
      type: "Note: ",
      note: "channel is case sensitive.",
      example: "!stc general",
    },
    {
      command: "!rec",
      description: "bot starts recording.",
      type: "Prerequisite: ",
      note: "bot must already be in a voice channel.",
      example: "!rec",
    },
    {
      command: "!sttsc",
      description:
        "bot sets text to speech channel, typically the same as transcription channel",
      note: "",
      example: "!sttsc general",
    },
    {
      command: "!startts",
      description: "bot starts text to speech.",
      type: "Prerequisite: ",
      note: "bot must already be in a voice channel.",
      example: "!startts",
    },
    {
      command: "!storec",
      description:
        "bot stops recording all currently active voices, does not transcribe previously active voices. Optional list of voices to stop recording, prevents future recording and transcribing",
      note: "",
      example: "!storec, !storec danhan Raven elizabeth",
    },
    {
      command: "!disconnect",
      description:
        "bot disconnects (removes itself) from current voice channel.",
      type: "Prerequisite: ",
      note: "bot must already be in a voice channel.",
      example: "!disconnect",
    },
    {
      command: "!enavc",
      description: "bot enables voice commands, bot will start recording.",
      type: "Prerequisite: ",
      note: "bot must already be in a voice channel.",
      example: "!enavc",
    },
  ];

  return (
    <div className="commands">
      <div className="commands__container">
        <div className="commands__content">
          <div className="hero__top">
            <span>Able</span>
          </div>
          <h1 className="commands__title">Commands List</h1>
          <motion.div
            className="commands__list"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {commands.map((command, index) => (
              <div
                className="commands__item"
                key={index}
                style={{ gridArea: `div${index + 1}` }}
              >
                <div className="commands__itemHead">
                  <span> {command.command}</span>
                  <div
                    className="commands__copy"
                    onClick={() => {
                      navigator.clipboard.writeText(command.command);
                    }}
                  >
                    <span>Copied!</span>
                    <img src={copy} alt="copy" />
                  </div>
                </div>

                <p>
                  {command.description}
                  {command.note.length > 0 && (
                    <span className="commands__note">
                      <b>{command.type}</b>
                      {command.note}
                    </span>
                  )}
                </p>
                <b>Expample: {command.example}</b>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
