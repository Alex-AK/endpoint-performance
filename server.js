// dependencies
const express = require('express');
const morgan = require('morgan');

const server = express();

// library middleware
server.use(morgan('dev'), express.json());

server.get('/api', (req, res) => {
	res.json({ message: 'The server is live.' });
});

module.exports = server;
