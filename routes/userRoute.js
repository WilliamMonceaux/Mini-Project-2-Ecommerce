const express = require("express");
const router = express.Router();
const { createUser, getUsers, deleteUser } = require("../controllers/userController");

router.get('/', getUsers);

router.post("/add", createUser);

router.delete('/:id', deleteUser);

module.exports = router;
