const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfile,
} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();
// route for registering users
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.get("/user/profile", isAuthenticatedUser, getUserDetails); // only if user is logged in he would be able to access the route
router.put("/user/update", isAuthenticatedUser, updateUserPassword);
router.put("/me/profile", isAuthenticatedUser, updateUserProfile);
module.exports = router;
