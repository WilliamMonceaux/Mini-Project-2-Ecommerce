const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getAllOrders,
} = require("../controllers/orderController");
const { authenticateToken } = require('../middleware/authToken');

router.get("/", authenticateToken, getAllOrders);

router.post("/checkout", authenticateToken, createOrder);

router.get("/:id", authenticateToken, getUserOrders);

module.exports = router;
