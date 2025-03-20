const express = require('express');
const router = express.Router();
const { getTips } = require('../controllers/tipsController');

// Define the route for getting tips
router.get('/', getTips);

module.exports = router;