const express = require("express");
const productRoutes = require("./routes/productRoute");
const cartRoutes = require("./routes/cartRoute");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderItemRoute");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mini-Project 2 Backend Server");
});

app.use("/api/cart", cartRoutes);

app.use("/api/shop", productRoutes);

app.use("/api/users", userRoutes);

app.use("/api/orderItems", orderRoutes);

module.exports = { app };
