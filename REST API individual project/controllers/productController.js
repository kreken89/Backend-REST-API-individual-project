const router = require('express').Router();
const { createNewProduct, getProducts, getProductsById, updateProduct, deleteProduct } = require('../models/productModel');

router.post('/', createNewProduct);

router.get('/', getProducts);
router.get('/:id', getProductsById);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct )


module.exports = router;