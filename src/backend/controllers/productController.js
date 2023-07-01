const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

// Function to handle common logic for finding products
const findProducts = async (query, res) => {
  try {
    const products = await Product.find(query);

    if (!products || products.length === 0) {
      throw new ErrorHandler(404, "No products found");
    } else {
      res.status(200).json({ success: true, products });
    }
  } catch (error) {
    throw new ErrorHandler(500, "Internal Server Error");
  }
};

// get all products
const getAllProducts = async (req, res, next) => {
  try {
    await findProducts({}, res);
  } catch (error) {
    next(error);
  }
};

// get products by gender
const getProductsByGender = async (req, res, next) => {
  try {
    const gender = req.params.gender.toUpperCase();
    await findProducts({ gender }, res);
  } catch (error) {
    next(error);
  }
};

// get products by brand
const getProductsByBrand = async (req, res, next) => {
  try {
    const brand = req.params.brand.toUpperCase();
    await findProducts({ brand }, res);
  } catch (error) {
    next(error);
  }
};

// get products by category
const getProductsByCategory = async (req, res, next) => {
  try {
    const category = req.params.category.toUpperCase();
    await findProducts({ category }, res);
  } catch (error) {
    next(error);
  }
};

// get products by price
const getProductsByPrice = async (req, res, next) => {
  try {
    const minPrice = parseFloat(req.query.minPrice) || 0;
    const maxPrice = parseFloat(req.query.maxPrice) || Infinity;
    await findProducts({ price: { $gte: minPrice, $lte: maxPrice } }, res);
  } catch (error) {
    next(error);
  }
};

//search products multiple fields
const search = async (req, res, next) => {
  try {
    let keyword = req.query.key;
    let minPrice = parseFloat(req.query.minPrice);
    let maxPrice = parseFloat(req.query.maxPrice);

    const query = {};

    // Add keyword search condition
    if (keyword) {
      const keywords = keyword.split(" ");
      const keywordRegex = keywords.map((kw) => new RegExp(kw, "i"));
      query.$or = [
        { name: { $in: keywordRegex } },
        { brand: { $in: keywordRegex } },
        { category: { $in: keywordRegex } },
      ];
    }

    // Add price range condition
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      query.price = { $gte: minPrice, $lte: maxPrice };
    } else if (!isNaN(minPrice)) {
      query.price = { $gte: minPrice };
    } else if (!isNaN(maxPrice)) {
      query.price = { $lte: maxPrice };
    }

    const products = await Product.find(query);

    res.status(200).json({ success: true, products });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductsByGender,
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPrice,
  search,
};
