const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = require("dotenv");
const { User, RefreshToken } = require("../models");

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

    const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "15m",
    });

    const refreshToken = await jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET_KEY || process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" },
    );

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Set expiration 7 days from now

    await RefreshToken.create({
      userId: user.id,
      token: refreshToken,
      expiresAt: expiresAt,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000, // 15 minutes in milliseconds
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    return res.status(200).json({
      success: true,
      data: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Could not login properly", err.message);
    res.status(500).json({ success: false, err: err.message });
  }
}

module.exports = {
  login,
};
