const express = require("express");
const router = express.Router();
const { checkout, getUserOrders } = require("../controllers/orderController");

router.get('/', getUserOrders);

router.post("/checkout", checkout);

module.exports = router;
