"use client";
const { Order, User, Cart, Product, OrderItem, sequelize, } = require("../models");

/**
 * @description Create checkout
 * @route Post api/orders/checkout
 */

async function checkout(req, res) {
  const userId = 1;

  const transaction = await sequelize.transaction();

  try {

    const cartItems = await Cart.findAll({
      where: { userId },
      include: [Product]
    });

    if (!cartItems.length) {
      await transaction.rollback();
      return res.status(400).json({ success: false, error: "Cart is empty" });
    };

    const totalAmount = cartItems.reduce((sum, item) => {
      return  sum + (item.quantity * item.product.price);
    }, 0)

    const order = await Order.create({
      userId,
      totalAmount,
      status: "pending"
    }, { transaction });

    for (const item of cartItems) {
      await OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.product.price
      }, { transaction })
    };

    await Cart.destroy({ where: { userId }, transaction });

    await transaction.commit();

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    console.error("CCheckout failed:", err.message);
    res.status(500).json({ success: false, error: "Order processing failed" });
  }
};

/**
 * @description View all orders in DB
 * @route GET api/orders
 */

async function getUserOrders(req, res) {
  try {
    const userOrders = await Order.findAll({});

    res.status(200).json({ success: true, data: userOrders });
  } catch (err) {
    console.error("Could not fetch User Orders.", err.message);
    res.status(500).json({ success: false, error: err.message});
  }
}

module.exports = {
  checkout,
  getUserOrders
};
