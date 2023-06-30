const express = require("express");
const {
  getAllProducts,
  getProductsByGender,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPrice,
} = require("../controllers/productController");
const router = express.Router();

//CUSTOMER ROUTES
router.get("/products", getAllProducts); // get all products route
router.get("/products/gender/:gender", getProductsByGender); // get products by gender
router.get("/products/brand/:brand", getProductsByBrand); // get products by brand
router.get("/products/category/:category", getProductsByCategory); // get products by category
router.get("/products/price", getProductsByPrice); // get products by price

//ADMIN ROUTES
module.exports = router;
