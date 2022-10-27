import "./App.css";
import Header from "./components/header/header";
import LeftBar from "./components/leftBar/leftBar";
import Storybox from "./components/storyBox/storybox";
import RightBar from "./components/rightBar/rightBar";
import Content from "./components/content/content";
import { useState } from "react";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");
  const toggleThemeMode = () => {
    // shehzad
    if (themeMode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };

  return (
    <div className={`App ${themeMode === "dark" ? "dark" : "light"}`}>
      <Header toggleThemeMode={toggleThemeMode} s={themeMode} />

      <LeftBar />
      <div className="bsb-2p">
        <div className="bsb-2">
          {/* <Storybox /> */}
          <Content />
        </div>
      </div>

      <RightBar />
    </div>
  );
};

export default App;
