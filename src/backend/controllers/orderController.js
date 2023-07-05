const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

//create new order
const newOrder = async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
};
//get single order
const getSingleOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
};
//get user's all orders
const myOrders = async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });
  if (orders.length === 0) {
    res.status(200).json({
      success: true,
      message: "No orders found",
    });
  } else {
    res.status(200).json({
      success: true,
      orders,
    });
  }
};
//make admin routes

module.exports = { newOrder, getSingleOrder, myOrders };
