const express = require('express');
const router = express.Router();
const { getProductCatalog } = require('../controllers/productController');

router.get('/products', getProductCatalog );

module.exports = router;