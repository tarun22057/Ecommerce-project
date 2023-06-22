import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  const SearchStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: "8px",
    borderRadius: "4px",
    width: "20em",
  };
  const InputStyle = {
    border: "none",
    marginLeft: "8px",
    backgroundColor: "transparent",
    color: "#333",
    padding: "4px",
    outline: "none",
  };
  return (
    <div style={SearchStyle}>
      <SearchIcon />
      <input type="text" style={InputStyle} placeholder="Search" />
    </div>
  );
};
