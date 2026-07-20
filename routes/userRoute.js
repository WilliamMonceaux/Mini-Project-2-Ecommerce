const express = require("express");
const router = express.Router();
const {
  getUsers,
  deleteUser,
  editUser,
} = require("../controllers/userController");
const { signup } = require("../controllers/signupController");
const { login } = require("../controllers/loginController");
const { validateRequest } = require("../middleware/validateRequest");
const { userSchema, partialUserSchema } = require("../schemas/userSchema");

router.get("/", getUsers);

router.post("/signup", signup);

router.post("/login", login);

router.patch("/:id", validateRequest(partialUserSchema), editUser);

router.delete("/:id", deleteUser);

module.exports = router;
