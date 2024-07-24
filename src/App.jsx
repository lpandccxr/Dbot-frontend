import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";

function App() {
  const [nav, setNav] = useState({});
  return (
    <div className="app">
      <Navbar set={setNav} nav={nav} />
      <Main setNav={setNav} />
    </div>
  );
}

export default App;
