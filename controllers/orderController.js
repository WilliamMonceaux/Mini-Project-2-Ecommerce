"use client";
const { Order, User, OrderItem, Cart, Product } = require("../models");
const { sequelize } = require("../config/dbConnect");

/**
 * @description Create checkout
 * @route Post api/orders/checkout
 */

async function createOrder(req, res) {
  const { userId } = req.body;
  const transaction = await sequelize.transaction();
  console.log("Transaction object:", transaction);

  try {
    const cartItems = await Cart.findAll({
      where: { userId },
      include: [Product],
      transaction,
    });

    if (!cartItems.length) {
      await transaction.rollback();
      return res.status(400).json({ success: false, error: "Cart is empty" });
    }

    const totalAmount = cartItems.reduce((sum, item) => {
      return sum + item.quantity * item.product.price;
    }, 0);

    const order = await Order.create(
      {
        userId,
        totalAmount,
        status: "pending",
      },
      { transaction },
    );

    for (const item of cartItems) {
      await OrderItem.create(
        {
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.product.price,
        },
        { transaction },
      );
    }

    await Cart.destroy({ where: { userId }, transaction });

    await transaction.commit();

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    console.error("Checkout failed:", err.message);
    res.status(500).json({ success: false, error: "Order processing failed" });
  }
}

/**
 * @description View all orders in DB
 * @route GET api/orders
 */

async function getAllOrders(req, res) {
  try {
    const userOrders = await Order.findAll({});

    res.status(200).json({ success: true, data: userOrders });
  } catch (err) {
    console.error("Could not fetch User Orders.", err.message);
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
  getAllOrders,
  getUserOrders,
};
