// Import dependencies
const http = require('http');
const app = require('./app');

// Assign a port where our project should run
// e.g. localhost:3000
const port = process.env.PORT || 4000;

// Create the server and pass a request listener function that is executed each time the server get a request.
const server = http.createServer(app);

server.listen(port);
