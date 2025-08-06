const Product = require('../../models/cart.js')

const dataController = {}
        
dataController.index = async (req, res, next) => {
  try {
    const user = await req.user.populate('products') // Populate products in the cart   
    res.locals.data.products = user.products
    res.locals.data.token = req.query.token || null // Include token if available
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}
module.exports = dataController