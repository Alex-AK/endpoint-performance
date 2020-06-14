# Endpoint Performance Compare
A simple and easy to use node app to query, test, and compare the performance of API endpoints.


## Getting Started
- Fork or clone repository
- Install dependencies using `yarn`

## Run Performance Check
- Update the `URL` and `numRequests` varibales in `runRequests.js`
- When ready, use `yarn compare` to run the script.


## Current Version
- The current utility runRequests simply runs a request against an endpoint x number of times and logs the total number of seconds for the requests. This can be used to run performance checks against different endpoint implementations or to check performance of different hosting environments based on computational configuration.

~~ IMPORTANT NOTE ~~
This is mostly intended to run locally. Running against a hosted environment may incur additional costs or slow down your environment for active users.


## Future Plans
- As needed, the utility functions will grow to assess endpoint implementation details and perforance implications, and endpoint stress testing and failure rates. 



### License
This application utilizes the MIT open source license.
