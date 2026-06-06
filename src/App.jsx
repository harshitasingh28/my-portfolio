// App.jsx

import SplashScreen from "./SplashScreen"
import Navbar from "./navBar"       // ← import your new Navbar

function App() {
  return (
    <div>
      <SplashScreen />

      {/* Navbar shows below the splash screen */}
      <Navbar />

      {/* Rest of your portfolio will go here */}
    </div>
  )
}

export default App