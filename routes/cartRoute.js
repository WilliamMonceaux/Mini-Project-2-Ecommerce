const express = require('express');
const router = express.Router();
const { getCartItems } = require('../controllers/cartController');

router.get('/', getCartItems);

module.exports = router;
