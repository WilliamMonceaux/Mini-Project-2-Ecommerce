const express = require("express");
const router = express.Router();
const {
  getCartItems,
  addItemToCart,
  updateQuantity,
  deleteProduct
} = require("../controllers/cartController");
const { authenticateToken } = require('../middleware/authToken');

router.get("/", authenticateToken, getCartItems);

router.post("/add", authenticateToken, addItemToCart);

router.patch("/:id", authenticateToken, updateQuantity);

router.delete("/:id", authenticateToken, deleteProduct);

module.exports = router;
