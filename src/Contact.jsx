import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreed: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.agreed) {
      alert("Please agree to the terms first!");
      return;
    }
    alert("Message sent! I will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      agreed: false,
    });
  };

  const inputStyle = {
    border: "1.5px solid #e0e0e0",
    padding: "0.75rem 1rem",
    fontSize: "0.85rem",
    fontFamily: "Inter, sans-serif",
    outline: "none",
    borderRadius: "3px",
    width: "100%",
  };

  const labelStyle = {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#333",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "0.4rem",
    display: "block",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "#fff",
        padding: "6rem 4rem",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(6rem, 18vw, 14rem)",
          color: "rgba(232, 0, 13, 0.06)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        CONTACT
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
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
            marginBottom: "0.8rem",
          }}
        >
          Get In Touch
        </p>

        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            color: "#111",
            letterSpacing: "0.02em",
            marginBottom: "0.5rem",
          }}
        >
          Let's Work Together
        </h2>

        <p
          style={{
            fontSize: "0.85rem",
            color: "#888",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}
        >
          Have a project in mind? I would love to hear about it.
          Send me a message and let's create something amazing together.
        </p>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Harshita"
              style={inputStyle}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Singh"
              style={inputStyle}
            />
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="harshita@example.com"
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            style={{
              ...inputStyle,
              resize: "none",
              height: "130px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.6rem",
            margin: "1rem 0",
          }}
        >
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            style={{ marginTop: "3px", accentColor: "#e8000d" }}
          />
          <span style={{ fontSize: "0.75rem", color: "#888", lineHeight: 1.5 }}>
            I give permission to contact me at this email address
            for relevant opportunities and services.
          </span>
        </div>

        <button
          onClick={handleSubmit}
          style={{
            background: "#e8000d",
            color: "#fff",
            border: "none",
            padding: "0.85rem 2.5rem",
            fontSize: "0.85rem",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: "3px",
            letterSpacing: "0.04em",
            width: "100%",
            marginTop: "0.5rem",
          }}
        >
          Send Message
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
}