import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";

import "./Main.scss";
import { useRef } from "react";

export default function Main() {
  const toFeatures = useRef(null);
  const toTop = useRef(null);

  return (
    <div className="mainPage">
      <Hero theRef={toFeatures} top={toTop} />
      <Feature toFeature={toFeatures} />
      <Footer top={toTop} />
    </div>
  );
}
