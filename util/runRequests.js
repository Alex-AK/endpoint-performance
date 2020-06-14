const axios = require('axios');

const runRequests = async (URL, numRequests) => {
	console.log('start compare');
	const startTime = Date.now();

	// run requests
	for (let i = 0; i <= numRequests; i++) {
		try {
			await axios.get(URL);
		} catch (error) {
			console.log(error);
		}
	}
	// calculate total runTime in seconds
	const endTime = Date.now();
	const runTime = (endTime - startTime) / 1000;
	console.log(`${runTime}s.`);
};

module.exports = runRequests;
