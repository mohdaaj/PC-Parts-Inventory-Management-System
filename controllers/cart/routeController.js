const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authDataController = require('../auth/dataController.js')

// Cart index
router.get('/', authDataController.auth, dataController.index, viewController.Indexofcart);
// Add to cart
router.post('/:id/add', authDataController.auth, dataController.add, (req, res) => {
  const token = req.query.token ? `?token=${req.query.token}` : '';
  res.redirect('/cart' + token);
});
// Decrease quantity
router.post('/:id/decrease', authDataController.auth, dataController.decrease, (req, res) => {
  const token = req.query.token ? `?token=${req.query.token}` : '';
  res.redirect('/cart' + token);
});
// Delete from cart
router.post('/:id/delete', authDataController.auth, dataController.delete, (req, res) => {
  const token = req.query.token ? `?token=${req.query.token}` : '';
  res.redirect('/cart' + token);
});

module.exports = router;