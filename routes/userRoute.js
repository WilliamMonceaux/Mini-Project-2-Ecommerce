const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  deleteUser,
  editUser,
} = require("../controllers/userController");

router.get("/", getUsers);

router.post("/add", createUser);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);

module.exports = router;
