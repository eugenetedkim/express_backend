const express = require('express');
const router = express.Router();

// These are router-level middelware and takes 2 arguments.
// 1st subroute or sub URL.
// 2nd argument is a middleware function that has access to the response and request objects, and the next middleware function.
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched',
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Order was created',
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order details',
    orderId: req.params.orderId,
  });
});

router.patch('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated order',
    orderId: req.params.orderId,
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted order',
    orderId: req.params.orderId,
  });
});

module.exports = router;
