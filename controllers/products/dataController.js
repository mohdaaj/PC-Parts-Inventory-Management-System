
const Product = require('../../models/products.js')

const dataController = {}

// GET /products
dataController.index = async (req, res, next) => {
  try {
    const user = await req.user.populate('products') // ✅ populate product if needed
    res.locals.data.products = user.products
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

dataController.update = async (req, res, next) => {

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).send({ message: `Product with id ${req.params.id} not found` });
    }
    res.locals.data.product = updatedProduct;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

// POST /products
dataController.create = async (req, res, next) => {
  try {
      res.locals.data.product = await Product.create(req.body)
      req.user.products.addToSet({_id: res.locals.data.product._id })
      await req.user.save()
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

dataController.indexofall = async (req, res, next) => {
  console.log("indexofall")
  Product.find({}).populate('supplier')
    .then(products => {
      res.locals.data.products = products
      next()
    })    
}



module.exports = dataController
