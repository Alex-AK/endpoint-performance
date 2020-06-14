const runRequests = require('./runRequests');

const URL = 'http://localhost:5000/api';
const numRequests = 10000;

runRequests(URL, numRequests);
