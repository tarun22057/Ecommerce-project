const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();
// route for registering users
router.post("/register", registerUser);
module.exports = router;
