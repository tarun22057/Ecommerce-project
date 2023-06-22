import React from "react";
import ReactPlayer from "react-player";
// import { useNavigate } from "react-router-dom";
import "./VideoElement.css";
import videoFile from "./Assets/herosection-video.mp4";

export const VideoElement = () => {
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          url={videoFile}
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="hero-text">
        <h1>Step into Summer Style</h1>
        <h2>
          For days where you need fresh kicks that can keep up with your every
          move
        </h2>
      </div>

      <button
        // onClick={() => Navigate("product-listing")}
        className="shop-now-btn"
      >
        Shop Now
      </button>
    </div>
  );
};
