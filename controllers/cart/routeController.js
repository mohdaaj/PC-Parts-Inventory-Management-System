const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')
const authDataController = require('../auth/dataController.js')

router.get('/cart', authDataController.auth, dataController.index, viewController.Indexofcart); // Index (user's products)
