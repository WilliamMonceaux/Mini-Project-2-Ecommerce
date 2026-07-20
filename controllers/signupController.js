const bcrypt = require("bcrypt");
const { User } = require("../models");

/**
 * @description Registers a new user and hashes their password before storage.
 * @route POST /api/users/signup
 * @access Public
 *
 * @param {Object} req - The Express request object.
 * @param {Object} req.body - The user registration details.
 * @param {string} req.body.name - Full name of the user.
 * @param {string} req.body.email - Valid email address (must be unique).
 * @param {string} req.body.password - Plain-text password to be hashed.
 * @param {string} req.body.address - Shipping/billing address.
 *
 * @param {Object} res - The Express response object.
 * @returns {Object} 201 - Returns success status and the created user object.
 * @returns {Object} 500 - Returns error message if registration fails.
 */

async function signup(req, res) {
  try {
    const { name, email, password, address } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      name,
      password: hashedPassword,
      email,
      address,
    });

    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    console.error("Could not create User", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  signup,
};
