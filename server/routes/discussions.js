const express = require('express');
const router = express.Router();
const { getDiscussions } = require('../controllers/discussionsController');

// Define the route for getting discussions
router.get('/', getDiscussions);

module.exports = router;