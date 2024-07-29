import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [nav, setNav] = useState("");
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar set={setNav} nav={nav} />
        <Routes>
          <Route path="*" />
          <Route path="/" element={<Main setNav={setNav} />} />
          <Route path="/commands" />
          <Route path="/team" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
