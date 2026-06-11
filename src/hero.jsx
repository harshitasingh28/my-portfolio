import { useState, useEffect } from "react";

export default function Hero() {

  // roles array — the typewriter will loop through these
  const roles = ["Frontend Developer", "React Developer", "UI Designer"];

  // typed = the text currently showing on screen
  const [typed, setTyped] = useState("");

  // roleIndex = which role we're currently typing
  const [roleIndex, setRoleIndex] = useState(0);

  // deleting = are we erasing or typing?
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        // Add one more letter
        setTyped(current.slice(0, typed.length + 1));

        // If we finished typing the full word, start deleting after 1.5s
        if (typed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        // Remove one letter
        setTyped(current.slice(0, typed.length - 1));

        // If fully deleted, move to next role
        if (typed.length - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 60 : 100);

    return () => clearTimeout(timer);
  }, [typed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="flex items-end px-10 overflow-hidden"
      style={{ background: "#698795", minHeight: "88vh" }}
    > 
      {/* LEFT: Text content */}
      <div className="flex-1 pb-16 z-10">

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "0.3rem",
          }}
        >
          Hi, I'm a
        </p>

        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#fff",
            letterSpacing: "0.03em",
            lineHeight: 1,
            marginBottom: "0.2rem",
          }}
        >
          Harshita Singh
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "#111",
            letterSpacing: "0.03em",
            minHeight: "3rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          {typed}
          {/* Blinking cursor */}
          <span
            style={{
              display: "inline-block",
              width: "3px",
              height: "2rem",
              background: "#111",
              marginLeft: "4px",
              animation: "blink 0.8s step-start infinite",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.8,
            maxWidth: "380px",
            marginBottom: "2rem",
          }}
        >
          I build fast, scalable and modern web applications
          using React and Tailwind CSS. Passionate about clean
          code and great user experiences.
        </p>

        <div className="flex gap-4">
          <button
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "0.7rem 1.8rem",
              fontSize: "0.85rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              borderRadius: "3px",
            }}
          >
            View My Work
          </button>

          <button
            style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              padding: "0.7rem 1.8rem",
              fontSize: "0.85rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              borderRadius: "3px",
            }}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT: Your photo */}
      <div className="flex items-end justify-center" style={{ width: "380px" }}>
        {/* Replace this div with your actual photo later! */}
        <img
  src="/image.png"
  alt="Harshita"
  style={{
    width: "380px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "12px 12px 0 0",
    display: "block",
  }}
/>

      </div>

      {/* CSS for blinking cursor */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}