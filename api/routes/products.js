const express = require('express');
const router = express.Router();

// These are router-level middelware and takes 2 arguments.
// 1st subroute or sub URL.
// 2nd argument is a middleware function that has access to the response and request objects, and the next middleware function.

// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products',
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST requests to /products',
  });
  image.png;
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id == 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id,
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID',
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product',
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product',
  });
});

module.exports = router;
