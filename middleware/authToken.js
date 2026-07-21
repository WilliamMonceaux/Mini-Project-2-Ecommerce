const jwt = require("jsonwebtoken");
const env = require("dotenv");

/**
 * @description Middleware to authenticate incoming requests using JSON Web Tokens (JWT).
 * Extracts the token from the Authorization header, verifies its cryptographic signature,
 * and attaches the decoded user payload to the request object.
 * 
 * @function authenticateToken
 * @param {Object} req - The Express request object.
 * @param {Object} req.headers - The HTTP headers object.
 * @param {string} [req.headers.authorization] - The authorization header containing the Bearer token.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express callback function to pass control to the next middleware/controller.
 * 
 * @returns {Object} 401 - Returns an error if the authorization header or token is missing.
 * @returns {Object} 403 - Returns an error if the token is invalid, malformed, or expired.
 * @returns {void} Calls next() upon successful verification.
 */

async function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ success: false, error: "No token received" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err)
      return res
        .status(403)
        .json({ success: false, error: "Invalid or expired token" });
    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken
};
