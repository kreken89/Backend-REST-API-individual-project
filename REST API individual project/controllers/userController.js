const router = require('express').Router();
const { addUser, login, removeUser, updateUser } = require('../models/userModel');
const { verifyToken } = require('../authentication/auth');

router.post('/add', addUser);
router.post('/login', login);

router.delete('/:id', verifyToken, removeUser);

router.put('/:id', verifyToken, updateUser);

module.exports = router;