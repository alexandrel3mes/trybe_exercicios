const express = require('express');

const router = express.Router();
const cepController = require('../controllers/CepController');

router.get('/', (_req, res) => res.status(200).json({ "message": "cep!" }));

router.get('/:cep', cepController.findByCep);

module.exports = router;