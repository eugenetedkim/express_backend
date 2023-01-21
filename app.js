const express = require('express');
// The app returned by express() is in fact a JavaScript Function, designed to be passed to Node’s HTTP servers as a callback to handle requests. This makes it easy to provide both HTTP and HTTPS versions of your app with the same code base, as the app does not inherit from these (it is simply a callback):
const app = express();
const morgan = require('morgan');

const cors = require('cors');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

app.use(cors());

// app.use() function is used to mount or put the specified middleware function(s) at the path which is being specified.
// This application-level middleware function is executed every time the app receives a request.
// This middleware function is mounted on the /products path and its route handlers.
// Route handlers (such as productRoutes), enable you to define multiple routes for a path.
// These lines of code forward requests to their respective routes.
// Routes which should handle requests.
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// If we reach here, that means our middleware functions weren't able to handle the request so we throw an error.
app.use((req, res, next) => {
  const error = new Error('Not found');
  console.log(error.message);
  res.status(404).json({
    message: error.message,
  });
  next(error);
});

module.exports = app;
