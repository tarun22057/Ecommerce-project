const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({
  path: "./src/backend/config/config.env",
});
const PORT = process.env.PORT;

//connecting DB
const connectDataBase = require("./config/database");
connectDataBase();

const server = app.listen(PORT, () => {
  console.log(`SERVER LISTENING AT PORT ${PORT}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR : ${err}`);
  console.log("SERVER SHUTTING DOWN...");
  server.close(() => {
    process.exit(1);
  });
});
