import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/Navbar/Navbar";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";

import "./Main.scss";

export default function Main() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
