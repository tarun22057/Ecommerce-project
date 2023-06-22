import React from "react";
import { Logos } from "./components/Logos";
import { SearchBar } from "./components/SearchBar";
import { Right } from "./components/Right/Right";
import "./Header.css";

export const Header = () => {
  return (
    <div className="nav-bar">
      <Logos />
      <SearchBar />
      <Right />
    </div>
  );
};
