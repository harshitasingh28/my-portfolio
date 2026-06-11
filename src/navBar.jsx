import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className="flex justify-between items-center px-10 py-4 sticky top-0 z-50"
      style={{ background: "#698795" }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.5rem",
          color: "#fff",
          letterSpacing: "0.05em",
        }}
      >
        Harshita
      </div>

      <ul className="flex gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={"#" + link.toLowerCase()}
              style={{
                fontSize: "0.8rem",
                fontFamily: "Inter, sans-serif",
                color: activeLink === link ? "#fff" : "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontWeight: activeLink === link ? "600" : "400",
                transition: "color 0.2s",
              }}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link);

                const section = document.getElementById(link.toLowerCase());
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        style={{
          background: "#68767b",
          color: "#fff",
          border: "none",
          padding: "0.45rem 1.3rem",
          fontSize: "0.8rem",
          fontFamily: "Inter, sans-serif",
          fontWeight: "600",
          cursor: "pointer",
          borderRadius: "3px",
        }}
      >
        Hire Me
      </button>
    </nav>
  );
}