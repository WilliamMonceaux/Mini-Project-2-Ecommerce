const express = require("express");
const router = express.Router();
const { createUser, getUsers } = require("../controllers/userController");

router.get('/', getUsers);

router.post("/add", createUser);

module.exports = router;
