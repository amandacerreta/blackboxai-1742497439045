const express = require('express');
const router = express.Router();
const { getResources } = require('../controllers/resourcesController');

// Define the route for getting resources
router.get('/', getResources);

module.exports = router;