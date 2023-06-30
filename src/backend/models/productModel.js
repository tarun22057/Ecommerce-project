const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    is_in_inventory: {
      type: Boolean,
      required: true,
    },
    items_left: {
      type: Number,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Products2", // Specify the collection name as a string value
  }
);

// Find products by gender
productSchema.statics.findByGender = async function (gender) {
  return this.find({ gender: gender });
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
