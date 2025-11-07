const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashBoardController');


router.get('/', dashboardController.getDashboard);

router.post('/reset', dashboardController.resetDashboard);

module.exports = router;