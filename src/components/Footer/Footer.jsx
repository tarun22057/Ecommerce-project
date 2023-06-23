import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/tarun22057">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/tarun-singh-159658241/">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/TarunSingh22057">
            <TwitterIcon />
          </a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} SneekPeek By TARUN SINGH. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
