"use client";
const { Order, User, OrderItem } = require("../models");

/**
 * @description Create Order
 * @route Post api/orders
 */

async function createOrder(req, res) {
  const { userId } = req.body;
  console.log("Request Body:", req.body); // Add this!
  try {
    const order = await Order.create({
      userId: userId,
    });

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    console.error("Could not create order", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
}

/**
 * @description fetch Orders created by User
 * @route api/orders/:id
 */

async function getUserOrders(req, res) {
  try {
    const userOrders = await Order.findAll({
      where: { userId: req.params.id },
      include: [OrderItem],
    });

    res.status(200).json({ success: true, data: userOrders });
  } catch (err) {
    console.error("Could not fetch orders for user", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  createOrder,
  getUserOrders,
};
