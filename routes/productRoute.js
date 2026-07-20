const express = require("express");
const router = express.Router();
const {
  getProductCatalog,
  getProductById,
} = require("../controllers/productController");

router.get("/products", getProductCatalog);

router.get("/products/:id", getProductById);

module.exports = router;
