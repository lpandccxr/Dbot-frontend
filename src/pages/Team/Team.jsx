import "./Team.scss";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import sample from "../../assets/sample.png";

export default function Team() {
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
      <div className="team__content">
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

        <div className="team__members">
          {memebrs.map((member, index) => (
            <div className="team__member" key={index}>
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
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
