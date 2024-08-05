import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import ActionSection from "../../components/ActionSection/ActionSection";
import Footer from "../../components/Footer/Footer";

import "./Main.scss";
import { useRef } from "react";

export default function Main() {
  const toFeatures = useRef(null);

  return (
    <div className="mainPage">
      <Hero theRef={toFeatures} />
      <Features theRef={toFeatures} />
      <ActionSection />
      <Footer />
    </div>
  );
}
