import React, { useState } from "react";
import "./Features.scss";
import transcript from "./../../assets/features-transcription-img.png";
import talkback from "./../../assets/features-talkback-img.png";
import community from "./../../assets/features-community-img.png";

export default function Features({ theRef }) {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const handleTooltipToggle = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };
  return (
    <div ref={theRef}>
      <section className="features">
        <div className="features__upper">
          <h2 className="features__title">Features</h2>
          <div className="features__content">
            <p className="features__info">
              *Click on each card to read more about the feature.
            </p>
          </div>
        </div>

        <div className="features__middle">
          {[
            {
              img: transcript,
              name: "Transcription",
              tooltip:
                "The bot provides real-time transcription of spoken conversations into text,ensuring seamless communication.",
            },
            {
              img: talkback,
              name: "Talk Back",
              tooltip:
                "The bot reads text-aloud and can also vocalize a user's response,enhancing interaction.",
            },
            {
              img: community,
              name: "Community",
              tooltip:
                "In addition to exceptional user support,we are an inclusive,friendly community that welcomes everyone.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="features__card"
              onClick={() => handleTooltipToggle(index)}
            >
              <img
                src={feature.img}
                className="features__img"
                alt={feature.name}
              />
              <p className="features__name">{feature.name}</p>
              {activeTooltip === index && (
                <div className="features__tooltip">
                  <p>{feature.tooltip}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const tooltipContainers = document.querySelectorAll(".features__card");

  tooltipContainers.forEach((container) => {
    container.addEventListener("click", () => {
      const tooltip = container.querySelector(".features__tooltip");
      tooltip.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!container.contains(e.target)) {
        const tooltip = container.querySelector(".features__tooltip");
        tooltip.classList.remove("active");
      }
    });
  });
});
