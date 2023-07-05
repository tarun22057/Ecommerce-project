const express = require("express");
const router = express.Router();
const {
  newOrder,
  getSingleOrder,
  myOrders,
} = require("../controllers/orderController");
const { isAuthenticatedUser } = require("../middleware/auth");

//Router for order
router.post("/order/new", isAuthenticatedUser, newOrder);
router.get("/order/get", isAuthenticatedUser, getSingleOrder);

router.get("/order/me", isAuthenticatedUser, myOrders);

module.exports = router;
