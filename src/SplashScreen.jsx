import { useState, useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  const [exiting, setExiting] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setMounted(false);
        onFinish();
      }, 900);
    }, 2400);
    return () => clearTimeout(exitTimer);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

        @keyframes revealUp {
          from { clip-path: inset(100% 0 0 0); }
          to   { clip-path: inset(0% 0 0 0); }
        }

        .splash-name {
          font-family: 'Dancing Script', cursive;
          font-weight: 700;
          font-size: clamp(4rem, 12vw, 8rem);
          line-height: 1.1;
          cursor: default;
          user-select: none;
          animation: revealUp 3s ease forwards;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{
          background: "#69818f",
          transform: exiting ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        <h1
          className="splash-name"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            color: hovered ? "#ffffff" : "#020202",
            textShadow: hovered
              ? "0 0 40px rgba(255,255,255,0.9)"
              : "none",
          }}
        >
          Harshita
        </h1>
      </div>
    </>
  );
}