const express = require('express');
const router = express.Router();
const { getClasses } = require('../controllers/classesController');

// Define the route for getting classes
router.get('/', getClasses);

module.exports = router;