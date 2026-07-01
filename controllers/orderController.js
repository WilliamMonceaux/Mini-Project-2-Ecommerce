"use client";
const { Order, User } = require("../models");

/**
 * @description Create Order
 * @route Post api/orders
 */

async function createOrder(req, res) {
  const { userId } = req.body;
  const user = await User.findByPk(userId);
  try {
    const order = await Order.create({
      userId: user,
      totalAmount,
      status,
    });

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    console.error("Could not create order", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  createOrder,
};
