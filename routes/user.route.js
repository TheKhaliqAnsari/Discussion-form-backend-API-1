const express = require('express');
const router = require('express').Router();
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.use(express.json());

router.route('/getusers').get(authMiddleware.verifyRequest, authController.getAllUsers);
router.route('/register').post(authController.register);
router.route('/:userName').get(authController.getUserByUsername);


module.exports = router;