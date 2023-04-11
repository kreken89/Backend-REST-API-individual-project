const router = require('express').Router();
const { verifyToken } = require('../authentication/auth');
const { createNewOrder, getOrders } = require('../models/orderModel');

router.post('/add', verifyToken, createNewOrder );

router.get('/myOrders', verifyToken, getOrders);

module.exports = router