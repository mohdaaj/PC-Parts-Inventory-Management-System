const Products = require('../../models/products.js')

// API Products controllers - returns JSON responses
const apiController = {
  // Get all products for authenticated user
  index(req, res) {
    res.json(res.locals.data.products)
  },

  // Get single product
  show(req, res) {
    res.json(res.locals.data.product)
  },

  // Create new product
  create(req, res) {
    res.status(201).json(res.locals.data.product)
  },

  // Delete product
  destroy(req, res) {
    res.status(200).json({ message: 'Products successfully deleted' })
  },

}

module.exports = apiController 