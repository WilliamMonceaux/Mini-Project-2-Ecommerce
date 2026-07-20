const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

/**
 * @description Authenticates a user by verifying credentials against the database.
 * @route POST /api/users/login
 * @access Public
 *
 * @param {Object} req - The Express request object.
 * @param {Object} req.body - The login credentials.
 * @param {string} req.body.email - The user's registered email address.
 * @param {string} req.body.password - The plain-text password to verify.
 *
 * @param {Object} res - The Express response object.
 * @returns {Object} 200 - Returns success status and the user data upon successful login.
 * @returns {Object} 401 - Returns an error if the user is not found or password does not match.
 * @returns {Object} 500 - Returns error message if the server process fails.
 */

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error("Could not login properly", err.message);
    res.status(500).json({ success: false, err: err.message });
  }
}

module.exports = {
  login,
};
