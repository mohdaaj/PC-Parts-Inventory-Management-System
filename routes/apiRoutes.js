const express = require('express')
const router = express.Router()
const userApiController = require('../controllers/auth/apiController')
const fruitApiController = require('../controllers/products/apiController')
const fruitDataController = require('../controllers/products/dataController')

// User API Routes
router.post('/users', userApiController.createUser)
router.post('/users/login', userApiController.loginUser)
router.get('/users/profile', userApiController.auth, userApiController.getProfile)
router.put('/users/:id', userApiController.auth, userApiController.updateUser)
router.delete('/users/:id', userApiController.auth, userApiController.deleteUser)

// Fruit API Routes
router.get('/products', userApiController.auth, fruitDataController.index, fruitApiController.index)
router.get('/products/:id', userApiController.auth, fruitDataController.show, fruitApiController.show)
router.post('/products', userApiController.auth, fruitDataController.create, fruitApiController.create)
router.put('/products/:id', userApiController.auth, fruitDataController.update, fruitApiController.show)
router.delete('/products/:id', userApiController.auth, fruitDataController.destroy, fruitApiController.destroy)

module.exports = router 