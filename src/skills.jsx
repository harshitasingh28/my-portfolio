import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [visible, setVisible] = useState({});
  const sectionRef = useRef(null);

  const skills = [
    {
      num: "01",
      category: "Frontend Skills",
      desc: "Building beautiful, responsive and fast user interfaces using modern web technologies.",
      color: "#e8000d",
      tags: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      cardLeft: false,
    },
    {
      num: "02",
      category: "Development Skills",
      desc: "Developing scalable backend systems and APIs with modern tools and frameworks.",
      color: "#3b82f6",
      tags: ["Node.js", "Git", "REST API", "TypeScript", "MongoDB"],
      cardLeft: true,
    },
    {
      num: "03",
      category: "Core CSE",
      desc: "Strong foundation in computer science fundamentals and problem solving.",
      color: "#10b981",
      tags: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
      cardLeft: false,
    },
    {
      num: "04",
      category: "ML Skills",
      desc: "Building intelligent systems with machine learning and data science tools.",
      color: "#f59e0b",
      tags: ["Python", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"],
      cardLeft: true,
    },
    {
      num: "05",
      category: "Tools",
      desc: "Using the best tools to build, design and ship products efficiently.",
      color: "#8b5cf6",
      tags: ["VS Code", "GitHub", "Figma", "Postman", "Docker"],
      cardLeft: false,
    },
    {
      num: "06",
      category: "Soft Skills",
      desc: "Collaborating effectively and leading teams to deliver great results.",
      color: "#ec4899",
      tags: ["Problem Solving", "Teamwork", "Communication", "Leadership", "Creativity"],
      cardLeft: true,
    },
  ];

  useEffect(() => {
    const observers = [];

    skills.forEach((_, index) => {
      const el = document.getElementById("skill-row-" + index);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: "#fff",
        padding: "6rem 4rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#e8000d",
            marginBottom: "0.5rem",
          }}
        >
          What I Know
        </p>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            color: "#111",
            letterSpacing: "0.02em",
          }}
        >
        </h2>
      </div>

      {/* Skill Rows */}
      {skills.map((skill, index) => (
        <div key={skill.num}>
          <div
            id={"skill-row-" + index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              minHeight: "150px",
              flexDirection: skill.cardLeft ? "row-reverse" : "row",
            }}
          >
            {/* Dotted line connector in middle */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                borderTop: "2px dashed " + skill.color,
                opacity: 0.4,
                zIndex: 0,
              }}
            />

            {/* Text Side */}
            <div
              style={{
                width: "40%",
                padding: "1rem 0",
                textAlign: skill.cardLeft ? "right" : "left",
                opacity: visible[index] ? 1 : 0,
                transform: visible[index]
                  ? "translateX(0)"
                  : skill.cardLeft
                  ? "translateX(80px)"
                  : "translateX(-80px)",
                transition: "all 0.8s ease",
              }}
            >
              {/* Big faded number */}
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "4rem",
                  color: "rgba(0,0,0,0.05)",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                {skill.num}
              </span>

              {/* Category name */}
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  color: "#111",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                {skill.category}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#888",
                  lineHeight: 1.7,
                  maxWidth: "240px",
                  marginLeft: skill.cardLeft ? "auto" : "0",
                }}
              >
                {skill.desc}
              </p>
            </div>

            {/* Card Side */}
            <div
              style={{
                width: "45%",
                zIndex: 1,
                opacity: visible[index] ? 1 : 0,
                transform: visible[index]
                  ? "translateX(0)"
                  : skill.cardLeft
                  ? "translateX(-80px)"
                  : "translateX(80px)",
                transition: "all 0.8s ease 0.15s",
              }}
            >
              <div
                style={{
                  background: skill.color,
                  borderRadius: "12px",
                  padding: "1.4rem 1.6rem",
                }}
              >
                {/* Card title */}
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {skill.category}
                </div>

                {/* Skill tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: "inline-block",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "20px",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        background: "rgba(255,255,255,0.2)",
                        color: "#fff",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical divider between rows */}
          {index < skills.length - 1 && (
            <div
              style={{
                width: "1px",
                height: "50px",
                background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.1), transparent)",
                margin: "0 auto",
              }}
            />
          )}
        </div>
      ))}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
}