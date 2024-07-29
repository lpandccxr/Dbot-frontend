import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import ActionSection from "../../components/ActionSection/ActionSection";

import "./Main.scss";

export default function Main({ setNav }) {
  return (
    <div className="mainPage">
      <Hero setNav={setNav} />
      <Features />
      <ActionSection />
    </div>
  );
}
