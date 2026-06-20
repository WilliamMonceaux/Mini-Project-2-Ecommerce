"use strict";
const axios = require("axios");
const { Product } = require("../models");
const BASE_URL = "http://fakestoreapi.com/products";

async function getProducts() {
  console.log("Fetching products from Fake Store API...");
  try {
    const response = await axios.get(BASE_URL);
    const products = response.data;

    console.log(
      `Found ${products.length} amount of products. Formatting data...`,
    );

    // Only importing properties being used for fake store products into database
    const formattedProducts = products.map((item) => ({
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
    }));

    await Product.bulkCreate(formattedProducts, { validate: true });
    console.log("Database successfully seeded products for Ecommerce store!");
    process.exit(0);
  } catch (err) {
    console.error("Failed to seed products for Ecommerce store.", err.message);
    process.exit(1);
  }
}

getProducts();
