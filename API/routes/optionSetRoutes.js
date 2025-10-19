const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/optionSetController');

router.get('/', ctrl.list);

module.exports = router;
