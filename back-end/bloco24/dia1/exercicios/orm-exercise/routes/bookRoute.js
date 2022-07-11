const express = require('express');
const router = express.Router();
const controller = require('../msc/controllers/bookController');

router.get('/', controller.getAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', controller.edit);

module.exports = router;