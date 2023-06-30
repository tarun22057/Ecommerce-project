const express = require("express");
const app = express();

app.use(express.json());

//Route imports for PRODUCTS
const product = require("./routes/productRoute");
app.use("/api/v1", product);

module.exports = app;
