const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

const errorMiddleware = require("./middleware/error");

// Route imports for PRODUCTS
const product = require("./routes/productRoute");
app.use("/api/v1", product);

// Route imports for USERS
const user = require("./routes/userRoute");
app.use("/api/v1", user);

// Route imports for ORDERS
const order = require("./routes/orderRoute");
app.use("/api/v1", order);

// Middleware for error handling
app.use(errorMiddleware);

module.exports = app;
