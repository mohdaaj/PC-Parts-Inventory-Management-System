const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authDataController = require('../auth/dataController.js')

// Cart index
router.get('/', authDataController.auth, dataController.index, viewController.Indexofcart);
// Add to cart
router.post('/:id/add', authDataController.auth, dataController.add, viewController.addtoCart);
// Decrease quantity
router.post('/:id/decrease', authDataController.auth, dataController.decrease, viewController.decrease);
// Delete from cart
router.post('/:id/delete', authDataController.auth, dataController.delete, viewController.delete);

module.exports = router;