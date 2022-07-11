const express = require('express');
const router = express.Router();
const controller = require('../msc/controllers/bookController');

router.get('/', controller.getAll);

module.exports = router;