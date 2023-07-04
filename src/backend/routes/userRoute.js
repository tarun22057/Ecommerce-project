const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
} = require("../controllers/userController");
const router = express.Router();
// route for registering users
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/password/reset", forgotPassword);
module.exports = router;
