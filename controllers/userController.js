"use client";
const { User } = require("../models");

/**
 * @description Edit user information
 * @route PATCH api/user/:id
 */

async function editUser(req, res) {
  const id = req.params.id;
  const { name, password, email, address } = req.body;
  try {
    const [updatedRows] = await User.update(
      { name, password, email, address },
      { where: { id: id } },
    );

    if ([updatedRows] == 0) {
      res
        .status(404)
        .json({ success: false, error: "User not found or made no changes" });
    }

    res.status(200).json({
      success: true,
      message: `Successfully updated User ${id}`,
    });
  } catch (err) {
    console.error("Could not edit user information", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
}

/**
 * @description Delete a user from DB
 * @route DELETE api/user/:id
 */

async function deleteUser(req, res) {
  const id = req.params.id;

  try {
    const deletedUser = await User.destroy({ where: { id: id } });

    res.status(200).json({ success: true, data: deletedUser });
  } catch (err) {
    console.error("Could not delete user", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  editUser,
  deleteUser,
};
