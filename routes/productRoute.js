const express = require('exress');
const router = express.Router();
const { products } = require('../controllers/productController');

router.get('/products', products )

module.exports = router;