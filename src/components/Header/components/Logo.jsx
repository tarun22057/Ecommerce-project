import React from "react";

export const Logo = () => {
  const logoStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "32px",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  };

  const accentStyle = {
    color: "#ff3b3f",
  };

  return (
    <div style={logoStyle}>
      Sneak<span style={accentStyle}>P</span>eek
    </div>
  );
};
