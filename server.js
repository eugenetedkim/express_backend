// Import dependencies
const https = require('https');
const app = require('./app');

// Assign a port where our project should run
// e.g. localhost:3000
const port = process.env.PORT || 5000;

// Create the server and pass a request listener function that is executed each time the server get a request.
const server = https.createServer(app);

server.listen(port);

console.log(`Server listening on port ${port}`);
