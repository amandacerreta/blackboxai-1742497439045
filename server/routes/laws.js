const express = require('express');
const router = express.Router();
const { getLaws } = require('../controllers/lawsController');

// Define the route for getting laws
router.get('/', getLaws);

module.exports = router;