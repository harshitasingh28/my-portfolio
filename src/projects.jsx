import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = {
    num: "01",
    icon: "🛒",
    color: "linear-gradient(135deg, #e8000d, #7f0000)",
    label: "Featured Project",
    title: "Amazon Clone",
    desc: "A fully functional e-commerce website clone built with React.js. Features product listings, cart functionality, and responsive design matching Amazon's UI perfectly.",
    tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/harshitasingh28/AmazonClone",
    live: "#",
    isLive: true,
  };

  const projects = [
    {
      num: "02",
      icon: "💬",
      color: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      title: "Chat PDF",
      desc: "An AI-powered app that lets you chat with your PDF documents using natural language processing and TypeScript.",
      tech: ["TypeScript", "Next.js", "AI", "React"],
      github: "https://github.com/harshitasingh28/chat-pdf",
      live: "#",
      isLive: true,
    },
    {
      num: "03",
      icon: "🎲",
      color: "linear-gradient(135deg, #10b981, #065f46)",
      title: "Dice Game",
      desc: "A fun interactive dice game built with JavaScript featuring smooth animations and real-time score tracking.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/harshitasingh28/Dice-Game",
      live: "#",
      isLive: false,
    },
    {
      num: "04",
      icon: "📝",
      color: "linear-gradient(135deg, #f59e0b, #b45309)",
      title: "Multi-Tier Notes App",
      desc: "A multi-tier architecture notes application with organized note management and clean UI design.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/harshitasingh28/multi-tier-notes-app",
      live: "#",
      isLive: false,
    },
    {
      num: "05",
      icon: "💰",
      color: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
      title: "Finance Dashboard",
      desc: "A comprehensive finance dashboard system for tracking expenses, income and financial analytics in real time.",
      tech: ["JavaScript", "React.js", "CSS3"],
      github: "https://github.com/harshitasingh28/finance-dashboard-system",
      live: "#",
      isLive: false,
    },
    {
      num: "06",
      icon: "🤖",
      color: "linear-gradient(135deg, #ec4899, #9d174d)",
      title: "Multitenant AI Assistant",
      desc: "A powerful multitenant AI assistant application built with TypeScript supporting multiple users and workspaces.",
      tech: ["TypeScript", "AI", "React", "Node.js"],
      github: "https://github.com/harshitasingh28/Multitenent-ai-assistant",
      live: "#",
      isLive: true,
    },
  ];

  const cardStyle = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: "all 0.7s ease " + delay + "s",
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: "#111",
        padding: "5rem 4rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem", ...cardStyle(0) }}>
        <p style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#e8000d",
          marginBottom: "0.5rem",
        }}>
          My Work
        </p>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          color: "#fff",
          letterSpacing: "0.02em",
        }}>
          Featured <span style={{ color: "#e8000d" }}>Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>

        {/* Featured Project — full width */}
        <div
          style={{
            gridColumn: "span 2",
            display: "flex",
            overflow: "hidden",
            background: "#1a1a1a",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.06)",
            transition: "border-color 0.3s, transform 0.3s",
            ...cardStyle(0.1),
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(232,0,13,0.4)"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
        >
          {/* Image */}
          <div style={{
            width: "45%",
            minHeight: "240px",
            background: featured.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "6rem", color: "rgba(255,255,255,0.08)" }}>{featured.num}</span>
            <span style={{ position: "absolute", fontSize: "3.5rem" }}>{featured.icon}</span>
            <span style={{
              position: "absolute", top: "12px", right: "12px",
              background: "#fff", color: "#e8000d",
              fontSize: "0.58rem", fontWeight: 700,
              padding: "0.25rem 0.6rem", borderRadius: "20px",
              letterSpacing: "0.08em",
            }}>LIVE</span>
          </div>

          {/* Body */}
          <div style={{ padding: "2rem" }}>
            <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#e8000d", marginBottom: "0.4rem" }}>
              {featured.label}
            </p>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#fff", letterSpacing: "0.03em", marginBottom: "0.8rem" }}>
              {featured.title}
            </h3>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "1.2rem", maxWidth: "420px" }}>
              {featured.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.4rem" }}>
              {featured.tech.map((t) => (
                <span key={t} style={{
                  fontSize: "0.62rem", fontWeight: 600,
                  padding: "0.25rem 0.7rem", borderRadius: "3px",
                  background: "rgba(232,0,13,0.12)", color: "#e8000d",
                  border: "1px solid rgba(232,0,13,0.2)",
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.8rem" }}>
              <a href={featured.github} target="_blank" rel="noreferrer" style={{
                background: "transparent", color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "0.5rem 1.2rem", fontSize: "0.72rem",
                fontFamily: "Inter, sans-serif", fontWeight: 600,
                cursor: "pointer", borderRadius: "4px",
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem",
              }}>⌥ GitHub</a>
              <a href={featured.live} target="_blank" rel="noreferrer" style={{
                background: "#e8000d", color: "#fff", border: "none",
                padding: "0.5rem 1.2rem", fontSize: "0.72rem",
                fontFamily: "Inter, sans-serif", fontWeight: 600,
                cursor: "pointer", borderRadius: "4px",
                textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem",
              }}>↗ Live Demo</a>
            </div>
          </div>
        </div>

        {/* Regular project cards */}
        {projects.map((project, index) => (
          <div
            key={project.num}
            style={{
              background: "#1a1a1a",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "border-color 0.3s, transform 0.3s",
              ...cardStyle(0.15 + index * 0.1),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(232,0,13,0.3)";
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Card image */}
            <div style={{
              width: "100%", height: "160px",
              background: project.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "5rem", color: "rgba(255,255,255,0.08)" }}>{project.num}</span>
              <span style={{ position: "absolute", fontSize: "2.5rem" }}>{project.icon}</span>
              {project.isLive && (
                <span style={{
                  position: "absolute", top: "10px", right: "10px",
                  background: "#fff", color: "#e8000d",
                  fontSize: "0.55rem", fontWeight: 700,
                  padding: "0.2rem 0.5rem", borderRadius: "20px",
                  letterSpacing: "0.08em",
                }}>LIVE</span>
              )}
            </div>

            {/* Card body */}
            <div style={{ padding: "1.3rem" }}>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#fff", letterSpacing: "0.03em", marginBottom: "0.5rem" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "1rem" }}>
                {project.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.1rem" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: "0.6rem", fontWeight: 600,
                    padding: "0.22rem 0.6rem", borderRadius: "3px",
                    background: "rgba(232,0,13,0.1)", color: "#e8000d",
                    border: "1px solid rgba(232,0,13,0.18)",
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.7rem" }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{
                  background: "transparent", color: "#fff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "0.4rem 0.9rem", fontSize: "0.68rem",
                  fontFamily: "Inter, sans-serif", fontWeight: 600,
                  cursor: "pointer", borderRadius: "4px",
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem",
                }}>⌥ GitHub</a>
                <a href={project.live} target="_blank" rel="noreferrer" style={{
                  background: "#e8000d", color: "#fff", border: "none",
                  padding: "0.4rem 0.9rem", fontSize: "0.68rem",
                  fontFamily: "Inter, sans-serif", fontWeight: 600,
                  cursor: "pointer", borderRadius: "4px",
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.35rem",
                }}>↗ Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
}