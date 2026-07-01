const express = require("express");
const router = express.Router();
const { createOrderItem } = require("../controllers/orderItemController");

router.post("/", createOrderItem);

module.exports = router;
