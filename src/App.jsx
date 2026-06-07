import { useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "./navBar";
import Hero from "./hero";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div style={{ background: "#111", minHeight: "100vh" }}>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
      {!showSplash && (
        <div>
          <Navbar />
          <Hero />
        </div>
      )}
    </div>
  );
}

export default App;