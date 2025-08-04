const Product = require('../../models/products.js')

const dataController = {}

// GET /products
dataController.index = async (req, res, next) => {
  try {
    const products = await Product.find().populate('supplier') // ✅ populate supplier if needed
    res.locals.data.products = products
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

// DELETE /products/:id
dataController.destroy = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

// PUT /products/:id
dataController.update = async (req, res, next) => {

}

// POST /products
dataController.create = async (req, res, next) => {
  try {
      res.locals.data.product = await Product.create(req.body)
      req.user.products.addToSet({_id: res.locals.data.product._id })
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

// GET /products/:id
dataController.show = async (req, res, next) => {
    try {
        res.locals.data.product = await Product.findById(req.params.id)
        if(!res.locals.data.product){
            throw new error(`could not locate a product with the id ${req.params.id}`)
        }
        next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

module.exports = dataController
