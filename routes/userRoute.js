const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  deleteUser,
  editUser,
} = require("../controllers/userController");
const { validateRequest } = require('../middleware/validateRequest');
const { userSchema, partialUserSchema } = require('../schemas/userSchema');


router.get("/", getUsers);

router.post("/add", createUser);

router.patch("/:id", validateRequest(partialUserSchema), editUser);

router.delete("/:id", deleteUser);

module.exports = router;
