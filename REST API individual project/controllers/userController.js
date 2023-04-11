const router = require('express').Router();
const { addUser, login, removeUser, updateUser } = require('../models/userModel');
const { verifyToken } = require('../authentication/auth');
//POST
router.post('/add', addUser);
router.post('/login', login);
//DELETE
router.delete('/:id', verifyToken, removeUser);
//PUT
router.put('/:id', verifyToken, updateUser);

module.exports = router;