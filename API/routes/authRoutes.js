const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/AuthController');

router.post('/login', ctrl.login);

module.exports = router;
