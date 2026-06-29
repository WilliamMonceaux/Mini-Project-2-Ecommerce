"use strict";
const { Cart, Product } = require("../models");

/**
 * @description Fetches all products in cart
 * @route api/cart
 */

async function getCartItems(req, res) {
  try {
    const productsInCart = await Cart.findAll({});

    console.log("Received all products in cart.");

    return res.status(200).json({ success: true, data: productsInCart });
  } catch (err) {
    console.error("Could not receive products in cart.", err.message);
    return res
      .status(500)
      .json({ success: false, data: null, error: err.message });
  }
}

/**
 * @description Add products into the cart
 * @route api/cart/add
 */

async function addItemToCart(req, res) {
  try {
    const { userId, productId, quantity } = req.body;

    const product = await Product.findByPk(productId);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }

    const newProductInCart = await Cart.create({
      userId,
      productId,
      unitPrice: product.price,
      quantity: quantity || 1,
    });

    return res.status(201).json({ success: true, data: newProductInCart });
  } catch (err) {
    console.error("Could not add product into cart", err.message);
    res.status(500).json({ success: false, data: null, error: err.message });
  }
}

/**
 * @description Update quantity of product
 * @route patch api/cart/:id
 */

async function updateQuantity(req, res) {
  const id = req.params.id;
  const { quantity } = req.body;

  try {
    const [updatedCount] = await Cart.update({ quantity }, {
      where: { id: id },
    });

    if (updatedCount === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Cart item not found" });
    }

    return res
      .status(200)
      .json({ status: true, message: "Quantity updated successfully" });
  } catch (err) {
    console.error("Could not change quantity amount", err.message);
    res.status(500).json({ success: false, data: null, error: err.message });
  }
}

/**
 * @description Delete product from cart
 * @route Delete api/cart:id
 */

async function deleteProduct(req, res) {
  try {
   const id = req.params.id;

  const deletedCount = await Cart.destroy({ where: { id: id }});

  if (deletedCount === 0) {
    return res.status(404).json({ success: false, message: 'Cart item not found'});
  }

  res.status(200).json({ success: true, message: 'Product removed from cart'}); 
  } catch (err) {
    res.status(500).json({ success: false, error: err.message});
  }
};

module.exports = {
  getCartItems,
  addItemToCart,
  updateQuantity,
  deleteProduct
};
