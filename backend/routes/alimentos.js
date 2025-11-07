const express = require("express");
const router = express.Router();
const alimentoController = require("../controllers/alimentosController");

router.post("/", alimentoController.createAlimento);
router.get("/", alimentoController.getAlimentos);

module.exports = router;