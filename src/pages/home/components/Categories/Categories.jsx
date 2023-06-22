import React from "react";
import "./Categories.css";
import { Men } from "./components/Men";
import { Women } from "./components/Women";
import { Kids } from "./components/Kids";
export const Categories = () => {
  return (
      <div>
          <div className="category-text">Shop By Category</div>
          <div className="categories-conatiner">
      <Men />
      <Women />
      <Kids />
    </div>
      </div>
    
  );
};
