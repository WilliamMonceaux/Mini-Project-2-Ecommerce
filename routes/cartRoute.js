const express = require('express');
const router = express.Router();
const { getCartItems, addItemToCart } = require('../controllers/cartController');

router.get('/', getCartItems);

router.post('/add', addItemToCart);

module.exports = router;
