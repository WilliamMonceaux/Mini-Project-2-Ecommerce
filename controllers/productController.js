"use strict";
const { Product } = require("../models");

/**
 * @description Fetches all products from catalog
 * @route GET /api/store/products
 */

async function getProductCatalog(req, res) {
  try {
    const products = await Product.findAll({});

    console.log("Received full product catalog.");

    return res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (err) {
    console.error("Error: Couldn't fetch catalog.", err.message);

    return res.status(500).json({
      success: true,
      message: "Server error occurred while retrieving the product catalog.",
      error: err.message,
    });
  }
}

async function getProductById(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }

    return res.status(200).json({ success: true, data: product });
  } catch (err) {
    console.error(
      `Error: Could not find product by id: ${product}`,
      err.message,
    );
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  getProductCatalog,
  getProductById
};
