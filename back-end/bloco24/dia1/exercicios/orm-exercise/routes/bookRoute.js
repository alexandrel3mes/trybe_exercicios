const express = require('express');
const router = express.Router();
const controller = require('../msc/controllers/bookController');

router.get('/', controller.getAll);
router.get('/:id', controller.findById);

module.exports = router;