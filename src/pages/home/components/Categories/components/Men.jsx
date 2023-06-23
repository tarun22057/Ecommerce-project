import React from "react";
import "./styles.css";
import maleImg from "./Assets/male.png";

export const Men = () => {
  return (
    <div className="img-comatiner">
      <img src={maleImg} />
      <button className="button">Men's</button>
    </div>
  );
};
