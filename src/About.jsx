import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { num: "2+",  label: "Years Exp." },
    { num: "15+", label: "Projects" },
    { num: "10+", label: "Clients" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id="about">

      {/* TOP SECTION — Red background */}
      <section
        style={{
          background: "#e8000d",
          padding: "5rem 4rem 5rem",
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Cross decorations */}
        {[
          { top: "20px", right: "40px",  size: "1.4rem" },
          { top: "70px", right: "100px", size: "1rem" },
          { bottom: "60px", right: "30px", size: "0.9rem" },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              color: "rgba(0,0,0,0.15)",
              fontSize: pos.size,
              top: pos.top,
              right: pos.right,
              bottom: pos.bottom,
            }}
          >
            ✕
          </div>
        ))}

        {/* LEFT: Phone frame with photo */}
        <div
          style={{
            flex: 0.8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-50px)",
            transition: "all 0.8s ease",
          }}
        >
          <div
            style={{
              background: "#111",
              borderRadius: "20px",
              padding: "10px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              transform: "rotate(-4deg)",
              animation: "floatAbout 4s ease-in-out infinite",
            }}
          >
            <div style={{ width: "7px", height: "7px", background: "#333", borderRadius: "50%", margin: "0 auto 7px auto" }} />
            <img
              src="/image.png"
              alt="Harshita"
              style={{
                width: "180px",
                height: "240px",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "12px",
                display: "block",
              }}
            />
            <div style={{ width: "50px", height: "4px", background: "#333", borderRadius: "2px", margin: "7px auto 0" }} />
          </div>
        </div>

        {/* RIGHT: Text content */}
        <div
          style={{
            flex: 1.2,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(50px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "0.8rem" }}>
            About Me
          </p>

          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              lineHeight: 1.05,
              color: "#fff",
              marginBottom: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            Hi, my name is{" "}
            <span style={{ color: "#111" }}>Harshita Singh</span>
          </h2>

          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.9, marginBottom: "1.5rem", maxWidth: "380px" }}>
            I am a passionate Frontend Developer based in India,
            dedicated to crafting clean, functional, and highly
            scalable web applications using React, Tailwind CSS
            and modern JavaScript.
          </p>

          <div style={{ display: "flex", gap: "2rem", marginBottom: "1.8rem" }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.6s ease " + (0.4 + i * 0.15) + "s",
                }}
              >
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#111", lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <button
            style={{
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "0.7rem 1.8rem",
              fontSize: "0.82rem",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              cursor: "pointer",
              borderRadius: "3px",
            }}
          >
            Download CV
          </button>
        </div>
      </section>

      {/* Wave divider — red to white */}
      <div style={{ background: "#e8000d", lineHeight: 0 }}>
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
          <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* BOTTOM SECTION — White background */}
      <section
        style={{
          background: "#fff",
          padding: "5rem 4rem",
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            flex: 1.2,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-50px)",
            transition: "all 0.8s ease 0.3s",
          }}
        >
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              lineHeight: 1.05,
              color: "#111",
              marginBottom: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            Let me show you how I bring your{" "}
            <span style={{ color: "#e8000d" }}>ideas to life.</span>
          </h2>
          <p style={{ fontSize: "0.82rem", color: "#888", lineHeight: 1.8, maxWidth: "400px" }}>
            I follow a structured, creative, and highly technical
            approach to turn your ideas into robust and scalable
            web applications with clean and modern design.
          </p>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap');
        @keyframes floatAbout {
          0%,100% { transform: rotate(-4deg) translateY(0); }
          50%      { transform: rotate(-4deg) translateY(-10px); }
        }
      `}</style>
    </div>
  );
}