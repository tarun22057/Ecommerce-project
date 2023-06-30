const Product = require("../models/productModel");

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// get products by gender
const getProductsByGender = async (req, res) => {
  try {
    const gender = req.params.gender.toUpperCase();
    const productsByGender = await Product.find({ gender });

    if (productsByGender.length === 0) {
      res.status(404).json({ success: false, error: "No products found" });
    } else {
      res.status(200).json({ success: true, productsByGender });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// get products by brand
const getProductsByBrand = async (req, res) => {
  try {
    const brand = req.params.brand.toUpperCase();
    const productsByBrand = await Product.find({ brand });

    if (productsByBrand.length === 0) {
      res.status(404).json({ success: false, error: "No products found" });
    } else {
      res.status(200).json({ success: true, productsByBrand });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category.toUpperCase();
    const productsByCategory = await Product.find({ category });

    if (productsByCategory.length === 0) {
      res.status(404).json({ success: false, error: "No products found" });
    } else {
      res.status(200).json({ success: true, productsByCategory });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// get products by price
const getProductsByPrice = async (req, res) => {
  try {
    const minPrice = parseFloat(req.query.minPrice) || 0;
    const maxPrice = parseFloat(req.query.maxPrice) || Infinity;
    const productsByPrice = await Product.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });

    if (productsByPrice.length === 0) {
      res.status(404).json({ success: false, error: "No products found" });
    } else {
      res.status(200).json({ success: true, productsByPrice });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductsByGender,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPrice,
};
