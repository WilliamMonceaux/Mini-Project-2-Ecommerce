const express = require("express");
const router = express.Router();
const {
  deleteUser,
  editUser,
} = require("../controllers/userController");
const { signup } = require("../controllers/signupController");
const { login } = require("../controllers/loginController");
const { validateRequest } = require("../middleware/validateRequest");
const { authenticateToken } = require('../middleware/authToken');
const { userSchema, partialUserSchema } = require("../schemas/userSchema");

router.post("/signup", signup);

router.post("/login", login);

router.patch("/:id", authenticateToken, validateRequest(partialUserSchema), editUser);

router.delete("/:id", authenticateToken, deleteUser);

module.exports = router;
