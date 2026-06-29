const express = require("express");
const router = express.Router();
const {
  getCartItems,
  addItemToCart,
  updateQuantity,
  deleteProduct
} = require("../controllers/cartController");

router.get("/", getCartItems);

router.post("/add", addItemToCart);

router.patch("/:id", updateQuantity);

router.delete("/:id", deleteProduct);

module.exports = router;
