const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const errorMiddleware = require("./middleware/error");
const error = require("./middleware/error");

//Route imports for PRODUCTS
const product = require("./routes/productRoute");
app.use("/api/v1", product);

//Route imports for USERS
const user = require("./routes/userRoute");
app.use("/api/v1", user);

//middleware for error
app.use(errorMiddleware);
module.exports = app;
