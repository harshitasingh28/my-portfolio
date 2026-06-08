import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "React.js",     level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript",   level: 80 },
    { name: "HTML & CSS",   level: 95 },
    { name: "Git & GitHub", level: 75 },
  ];

  const stats = [
    { num: "2+",  label: "Years Exp." },
    { num: "15+", label: "Projects" },
    { num: "10+", label: "Happy Clients" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: "#fff",
        padding: "6rem 4rem",
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
          transition: "all 0.8s ease",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#e8000d",
            marginBottom: "1rem",
          }}
        >
          About Me
        </p>

        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            lineHeight: 1.05,
            color: "#111",
            marginBottom: "1.5rem",
            letterSpacing: "0.02em",
          }}
        >
          Passionate about building{" "}
          <span style={{ color: "#e8000d" }}>beautiful</span>{" "}
          web experiences.
        </h2>

        <p
          style={{
            fontSize: "0.88rem",
            color: "#555",
            lineHeight: 1.9,
            marginBottom: "2rem",
            maxWidth: "440px",
          }}
        >
          I am Harshita Singh, a Frontend Developer based in India.
          I love turning ideas into real, interactive products that
          live on the internet. I specialize in React.js, Tailwind CSS
          and modern JavaScript, always focused on clean code and
          great design.
        </p>

        <div style={{ display: "flex", gap: "2.5rem", marginBottom: "2.5rem" }}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease " + (0.3 + index * 0.15) + "s",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.5rem",
                  color: "#e8000d",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#999",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <button
          style={{
            background: "#e8000d",
            color: "#fff",
            border: "none",
            padding: "0.75rem 2rem",
            fontSize: "0.82rem",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: "3px",
            letterSpacing: "0.04em",
          }}
        >
          Download CV
        </button>
      </div>

      <div
        style={{
          flex: 0.8,
          display: "flex",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(50px)",
          transition: "all 0.8s ease 0.2s",
        }}
      >
        <div
          style={{
            background: "#e8000d",
            borderRadius: "12px",
            padding: "2.5rem",
            color: "#fff",
            width: "300px",
          }}
        >
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.8rem",
              letterSpacing: "0.05em",
              marginBottom: "1.5rem",
              paddingBottom: "0.8rem",
              borderBottom: "2px solid rgba(255,255,255,0.2)",
            }}
          >
            My Skills
          </h3>

          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                marginBottom: "1rem",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease " + (0.5 + index * 0.1) + "s",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#fff",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "0.82rem", fontWeight: 500, minWidth: "90px" }}>
                {skill.name}
              </span>
              <div
                style={{
                  flex: 1,
                  height: "4px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "2px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    borderRadius: "2px",
                    width: visible ? skill.level + "%" : "0%",
                    transition: "width 1s ease " + (0.6 + index * 0.1) + "s",
                  }}
                />
              </div>
              <span style={{ fontSize: "0.7rem", opacity: 0.8 }}>
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
}