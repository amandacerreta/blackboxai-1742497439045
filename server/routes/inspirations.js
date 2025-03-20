const express = require('express');
const router = express.Router();
const { getInspirations } = require('../controllers/inspirationsController');

// Define the route for getting inspirations
router.get('/', getInspirations);

module.exports = router;