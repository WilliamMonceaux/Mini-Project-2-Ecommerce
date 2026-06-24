const express = require("express");
const router = express.Router();
const {
  getCartItems,
  addItemToCart,
  updateQuantity,
} = require("../controllers/cartController");

router.get("/", getCartItems);

router.post("/add", addItemToCart);

router.patch("/:id", updateQuantity);

module.exports = router;
