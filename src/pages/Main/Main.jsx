import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import ActionSection from "../../components/ActionSection/ActionSection";
import Footer from "../../components/Footer/Footer";

import "./Main.scss";
import { useRef } from "react";

export default function Main() {
  const toFeatures = useRef(null);
  const toTop = useRef(null);

  return (
    <div className="mainPage">
      <Hero theRef={toFeatures} top={toTop} />
      <Features theRef={toFeatures} />
      <ActionSection />
      <Footer top={toTop} />
    </div>
  );
}
