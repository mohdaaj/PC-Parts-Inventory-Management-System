const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: String, required: true },
  quantity: { type: String, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', productSchema)
