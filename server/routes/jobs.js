const express = require('express');
const router = express.Router();
const { getJobs } = require('../controllers/jobsController');

// Define the route for getting jobs
router.get('/', getJobs);

module.exports = router;