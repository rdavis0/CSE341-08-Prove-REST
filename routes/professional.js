const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

router.get('/', professionalController.getIndex);

// GET /professional
router.get('/professional', professionalController.getData);

module.exports = router;