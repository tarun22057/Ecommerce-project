const Product = require("../models/productModel");

// get all products
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};

// get products by gender
const getProductsByGender = async (req, res) => {
  const gender = req.params.gender.toUpperCase();
  const productsByGender = await Product.find({ gender });
  res.status(200).json({ success: true, productsByGender });
};

// get products by brand
const getProductsByBrand = async (req, res) => {
  const brand = req.params.brand;
  const productsByBrand = await Product.find({ brand });
  res.status(200).json({ success: true, productsByBrand });
};

// get products by category
const getProductsByCategory = async (req, res) => {
  const category = req.params.category;
  const productsByCategory = await Product.find({ category });
  res.status(200).json({ success: true, productsByCategory });
};

// get products by price
const getProductsByPrice = async (req, res) => {
  const minPrice = parseFloat(req.query.minPrice) || 0;
  const maxPrice = parseFloat(req.query.maxPrice) || Infinity;
  const productsByPrice = await Product.find({
    price: { $gte: minPrice, $lte: maxPrice },
  });
  res.status(200).json({ success: true, productsByPrice });
};

module.exports = {
  getAllProducts,
  getProductsByGender,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPrice,
};
