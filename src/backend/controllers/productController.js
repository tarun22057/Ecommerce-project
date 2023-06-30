const Product = require("../models/productModel");

// Function to handle common logic for finding products
const findProducts = async (query, res) => {
  try {
    const products = await Product.find(query);

    if (products.length === 0) {
      res.status(404).json({ success: false, error: "No products found" });
    } else {
      res.status(200).json({ success: true, products });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// get all products
const getAllProducts = async (req, res) => {
  await findProducts({}, res);
};

// get products by gender
const getProductsByGender = async (req, res) => {
  const gender = req.params.gender.toUpperCase();
  await findProducts({ gender }, res);
};

// get products by brand
const getProductsByBrand = async (req, res) => {
  const brand = req.params.brand.toUpperCase();
  await findProducts({ brand }, res);
};

// get products by category
const getProductsByCategory = async (req, res) => {
  const category = req.params.category.toUpperCase();
  await findProducts({ category }, res);
};

// get products by price
const getProductsByPrice = async (req, res) => {
  const minPrice = parseFloat(req.query.minPrice) || 0;
  const maxPrice = parseFloat(req.query.maxPrice) || Infinity;
  await findProducts({ price: { $gte: minPrice, $lte: maxPrice } }, res);
};

module.exports = {
  getAllProducts,
  getProductsByGender,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPrice,
};
