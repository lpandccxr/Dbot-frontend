import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Commands from "./pages/Commands/Commands";
import Team from "./pages/Team/Team";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [nav, setNav] = useState("");
  return (
    <div className="app">
      <BrowserRouter>
        <MobileNav setNav={setNav} />
        <Navbar set={setNav} nav={nav} />
        <Routes className="container">
          <Route path="*" />
          <Route path="/" element={<Main />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
