import React from "react";
import { Logo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
import { Right } from "./components/Right";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <Logo />
      <SearchBar />
      <Right />
    </div>
  );
};
