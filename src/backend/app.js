const express = require("express");
const app = express();

app.use(express.json());

const errorMiddleware = require("./middleware/error");

//Route imports for PRODUCTS
const product = require("./routes/productRoute");
const error = require("./middleware/error");
app.use("/api/v1", product);

//middleware for error
app.use(errorMiddleware);
module.exports = app;
