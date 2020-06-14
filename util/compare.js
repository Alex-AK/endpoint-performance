const runRequests = require('./runRequests');

/* 
IMPORTANT NOTE

This is intended to run locally, running against a hosted environment may incur additional server costs or slow down your environment for active users.
*/

// update URL and numRequests with your API endpoint
const URL = 'http://localhost:5000/api';
const numRequests = 10000;

runRequests(URL, numRequests);
