import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("About");
  const navLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: "#050a05",
        borderBottom: "1px solid rgba(0, 255, 65, 0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div
          className="font-mono text-lg tracking-wide cursor-pointer"
          style={{ color: "#00ff41" }}
        >
          <span style={{ opacity: 0.45 }}>{">"}</span>
          {" "}harshita.dev
        </div>

        <ul className="flex gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={"#" + link.toLowerCase()}
                className="font-mono text-sm tracking-widest no-underline"
                style={{
                  color: activeLink === link ? "#00ff41" : "rgba(0, 255, 65, 0.5)",
                  textShadow: activeLink === link ? "0 0 8px rgba(0,255,65,0.5)" : "none",
                  transition: "color 0.2s, text-shadow 0.2s",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link);
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-mono text-xs"
          style={{
            border: "1px solid rgba(0, 255, 65, 0.25)",
            background: "rgba(0, 255, 65, 0.04)",
            color: "#00ff41",
          }}
        >
          <span
            className="rounded-full animate-pulse"
            style={{
              width: "7px",
              height: "7px",
              background: "#00ff41",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Available
        </div>

      </div>
    </nav>
  );
}