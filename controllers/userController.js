"use client";
const { User } = require("../models");

/**
 * @description Fetch all users in DB
 * @route GET api/user
 */

async function getUsers(req, res) {
  try {
    const users = await User.findAll({});

    res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.error("Could not retrieve users in DB", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
}

/**
 * @description Add user to DB
 * @route POST api/user/add
 */

async function createUser(req, res) {
  try {
    const user = req.body;
    const newUser = await User.create(user);

    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    console.error("Could not create user", err.message);
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
  createUser,
  getUsers,
  deleteUser,
};
