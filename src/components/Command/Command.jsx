import { useState } from "react";
import copy from "../../assets/icons/copy.png";

export default function Command({ command, index }) {
  const [show, setShow] = useState({});

  const handlePaste = () => {
    navigator.clipboard.writeText(command.command);
    setShow({ opacity: 1 });
    setTimeout(() => {
      setShow({});
    }, 1500);
  };

  return (
    <div
      className="commands__item"
      key={index}
      style={{ gridArea: `div${index + 1}` }}
    >
      <div
        className="commands__itemHead"
        style={{ backgroundColor: `${command.color}` }}
      >
        <span> {command.command}</span>
        <div
          className="commands__copy"
          onClick={() => {
            handlePaste();
          }}
        >
          <span style={show}>Copied!</span>
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
  );
}
