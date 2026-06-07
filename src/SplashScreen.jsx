import { useState, useEffect } from "react";

export default function SplashScreen({ onFinish }) {

  // exiting = false → splash is sitting still on screen
  // exiting = true  → splash starts sliding UP (exit animation)
  const [exiting, setExiting] = useState(false);

  // mounted = true  → splash is in the DOM (visible)
  // mounted = false → splash is completely removed from DOM
  const [mounted, setMounted] = useState(true);

  // hovered = tracks if mouse is over the name
  // true → text turns dark with white glow
  // false → text stays white
  const [hovered, setHovered] = useState(false);

  useEffect(() => {

    // After 1 second (1000ms), start the exit animation
    const exitTimer = setTimeout(() => {

      // Step 1: trigger the slide-up CSS transition
      setExiting(true);

      // Step 2: after the animation finishes (0.9s),
      // remove from DOM and tell App.jsx we're done
      setTimeout(() => {
        setMounted(false);
        onFinish();
      }, 900);

    }, 1000);

    // Cleanup: cancel timer if component unmounts early
    return () => clearTimeout(exitTimer);

  }, []);

  // If mounted is false, render nothing at all
  if (!mounted) return null;

  return (
    <>
      {/* CSS styles — cursive font + hover effect */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        @keyframes fillBar {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>

      {/*
        OUTER WRAPPER
        - fixed inset-0  → covers entire screen
        - z-50           → sits above everything
        - flex flex-col items-center justify-center → centers content
        - transform      → changes based on exiting state
          exiting = false → translateY(0)    → normal position
          exiting = true  → translateY(-100%) → slides UP off screen
        - transition     → smooth 0.9s animation when transform changes
      */}
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{
          background: "#e8000d",
          transform: exiting ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >

        {/*
          THE NAME
          - Dancing Script = the cursive Google font
          - onMouseEnter → fires when mouse moves ONTO the text
          - onMouseLeave → fires when mouse moves OFF the text
          - color changes based on hovered state
          - text-shadow adds the white glow on hover
        */}
        <h1
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            fontSize: "clamp(4rem, 12vw, 8rem)",
            lineHeight: 1.1,
            cursor: "default",
            userSelect: "none",

            // Color changes on hover
            color: hovered ? "#111" : "#fff",

            // Glow appears on hover, disappears off hover
            textShadow: hovered
              ? "0 0 40px rgba(255,255,255,0.9)"
              : "none",

            // Smooth transition between the two states
            transition: "color 0.3s ease, text-shadow 0.3s ease",
          }}
        >
          Harshita
        </h1>

        {/*
          PROGRESS BAR
          - absolute bottom-0 left-0 → pinned to bottom-left
          - h-1 → 4px tall
          - fillBar animation → grows from 0% to 100% in 1 second
          - this visually shows how long the splash lasts
        */}
        <div
          className="absolute bottom-0 left-0 h-1"
          style={{
            background: "#111",
            animation: "fillBar 1s linear forwards",
          }}
        />

      </div>
    </>
  );
}