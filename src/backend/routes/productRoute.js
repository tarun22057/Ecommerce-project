const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsByGender,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPrice,
  search,
} = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleware/auth");

//CUSTOMER ROUTES
router.get("/products", isAuthenticatedUser, getAllProducts); // get all products route
router.get("/products/gender/:gender", getProductsByGender); // get products by gender
router.get("/products/brand/:brand", getProductsByBrand); // get products by brand
router.get("/products/category/:category", getProductsByCategory); // get products by category
router.get("/products/price", getProductsByPrice); // get products by price
router.get("/products/search/", search); // search functionality

//ADMIN ROUTES
module.exports = router;
