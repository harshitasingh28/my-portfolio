import { useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./navBar";
import Hero from "./hero";
import About from "./About";
import Skills from "./skills";
import Contact from "./Contact";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div style={{ background: "#111", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />

      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
    </div>
  );
}

export default App;