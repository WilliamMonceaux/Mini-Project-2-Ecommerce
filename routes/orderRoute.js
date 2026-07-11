const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getAllOrders,
} = require("../controllers/orderController");

router.get("/", getAllOrders);

router.post("/checkout", createOrder);

router.get("/:id", getUserOrders);

module.exports = router;
