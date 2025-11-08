const express = require('express');
const router = express.Router();
const consumoController = require('../controllers/consumoController');

router.post('/', consumoController.registrarConsumo);

module.exports = router;