"use client";
const { OrderItem, Product } = require("../models");

/**
 * @description Create order when purchasing products from cart
 * @route api/orderItems
 */

async function createOrderItem(req, res) {
  const { orderId, productId, quantity } = req.body;

  const product = await Product.findByPk(productId);

  if (!product) {
    return res.status(404).json({ success: false, error: "Product not found" });
  }

  try {
    const orderItem = await OrderItem.create({
      orderId,
      productId,
      quantity: quantity || 1,
      price: product.price,
    });

    res.status(201).json({ success: true, data: orderItem });
  } catch (err) {
    console.error("Could not add OrderItem", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  createOrderItem,
};
