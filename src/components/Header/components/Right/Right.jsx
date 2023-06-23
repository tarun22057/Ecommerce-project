import React from "react";
import { useNavigate } from "react-router-dom";
import "./Right.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Right = () => {
  const navigate = useNavigate();

  const handleProductsClick = () => {
    navigate("/Products");
  };

  const handleWishlistClick = () => {
    navigate("/Wishlist");
  };

  const handleCartClick = () => {
    navigate("/Cart");
  };

  const handleAccountClick = () => {
    navigate("/Account");
  };

  return (
    <div className="right-style">
      <span className="hover-style" onClick={handleProductsClick}>
        PRODUCTS
      </span>
      <FavoriteBorderOutlinedIcon
        className="hover-style font-style"
        onClick={handleWishlistClick}
      />
      <ShoppingCartOutlinedIcon
        className="hover-style font-style"
        onClick={handleCartClick}
      />
      <AccountCircleOutlinedIcon
        className="hover-style font-style"
        onClick={handleAccountClick}
      />
    </div>
  );
};
