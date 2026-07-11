const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
} = require("../controllers/orderController");

router.get("/", getUserOrders);

router.post("/checkout", checkout);

router.get("/:id", getUserOrders);

module.exports = router;
