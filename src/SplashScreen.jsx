// SplashScreen.jsx

// useState  → lets us store data that can change
// useEffect → lets us run code when the component loads
import { useState, useEffect } from "react";

// This is your component — just a function that returns JSX
export default function SplashScreen() {

  // showSplash = true  → splash screen is visible
  // showSplash = false → home page is visible
  // useState(true) means: start with showSplash = true
  const [showSplash, setShowSplash] = useState(true);

  // useEffect runs code AFTER the component appears on screen
  // The [] at the end means: run this only ONCE (on first load)
  useEffect(() => {

    // setTimeout waits 3000 milliseconds (= 3 seconds)
    // then runs the function inside it
    const timer = setTimeout(() => {

      // This changes showSplash from true → false
      // React sees the change and re-renders the UI
      setShowSplash(false);

    }, 1000); // ← 3000ms = 3 seconds

    // Cleanup: if the component is removed before 3s,
    // cancel the timer so nothing breaks
    return () => clearTimeout(timer);

  }, []); // ← empty array = run only once

  // ─── JSX: what gets shown on screen ───
  return (
    // The outer div takes up the full screen
    // "relative" lets child elements use "absolute" positioning
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* SPLASH SCREEN
          showSplash is true?  → show splash
          showSplash is false? → hide splash (opacity-0 + pointer-events-none)

          This is called a "conditional className" — we add or remove
          classes based on state using a ternary: condition ? "yes" : "no"
      */}
      <div className={`
        absolute inset-0
        flex flex-col items-center justify-center
        bg-black z-10
        transition-all duration-700
        ${showSplash ? "opacity-100" : "opacity-0 pointer-events-none -translate-y-full"}
      `}>

        {/* Your name — big and bold */}
        <h1 className="text-white font-bold text-8xl tracking-widest">
          {/* The first letter is green, rest are white */}
          <span className="text-green-400">H</span>ARSHITA SINGH
        </h1>

        {/* Green line under the name */}
        <div className="h-0.5 w-full bg-green-400 mt-3" />

        {/* Your role */}
        <p className="text-green-400 text-sm tracking-widest mt-4 font-mono">
          Software Developer
        </p>

        {/* Progress bar at the bottom
            animates from 0% → 100% width in 3 seconds */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-900">
          <div className="h-full bg-green-400 animate-[progress_3s_linear_forwards]" />
        </div>
      </div>

      {/* HOME PAGE
          Fades in after splash disappears */}
      <div className={`
        min-h-screen flex flex-col items-center justify-center
        bg-black transition-opacity duration-700
        ${showSplash ? "opacity-0" : "opacity-100"}
      `}>
        <h1 className="text-white text-5xl font-bold font-mono">
          Welcome to{" "}
          <span className="text-green-400">Harshita's</span> Portfolio
        </h1>
        <p className="text-green-600 mt-4 font-mono text-sm">
          // home page content goes here
        </p>
      </div>

    </div>
  );
}