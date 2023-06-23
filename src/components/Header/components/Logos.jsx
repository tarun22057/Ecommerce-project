import React from "react";
import { useNavigate } from "react-router-dom";

export const Logos = () => {
  const logoStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "32px",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
  };

  const accentStyle = {
    color: "#ff3b3f",
  };
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div style={logoStyle} onClick={handleLogoClick}>
      Sneak<span style={accentStyle}>P</span>eek
    </div>
  );
};
