const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/tips', require('./routes/tips'));
app.use('/api/classes', require('./routes/classes'));
app.use('/api/discussions', require('./routes/discussions'));
app.use('/api/laws', require('./routes/laws'));
app.use('/api/inspirations', require('./routes/inspirations'));
app.use('/api/resources', require('./routes/resources'));

// Sample route for testing
app.get('/api', (req, res) => {
    res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});