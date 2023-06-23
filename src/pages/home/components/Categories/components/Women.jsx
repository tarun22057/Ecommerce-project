import React from "react";
import "./styles.css";
import WomenImg from "./Assets/female.png";
export const Women = () => {
  return (
    <div className="img-comatiner">
      <img src={WomenImg} />
      <button className="button">Women's</button>
    </div>
  );
};
