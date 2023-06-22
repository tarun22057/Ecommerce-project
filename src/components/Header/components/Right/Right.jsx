import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Right.css";

export const Right = () => {
  return (
    <div className="right-style">
      <span className="hover-style">PRODUCTS</span>
      <FavoriteBorderOutlinedIcon className="hover-style font-style" />
      <ShoppingCartOutlinedIcon className="hover-style font-style" />
      <AccountCircleOutlinedIcon className="hover-style font-style" />
    </div>
  );
};
