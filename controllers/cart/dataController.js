const Cart = require('../../models/cart.js');
const Product = require('../../models/products.js');

const dataController = {};

// GET /cart - show user's cart
dataController.index = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }
    // Map to array of { _id, name, price, quantity }
    const cartItems = cart.items.map(item => ({
      _id: item.product._id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity
    }));
    res.locals.data.cart = cartItems;
    res.locals.data.token = req.query.token || null;
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// POST /cart/:id/add - add product to cart
dataController.add = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) cart = await Cart.create({ user: req.user._id, items: [] });
    const item = cart.items.find(i => i.product.equals(req.params.id));
    if (item) {
      item.quantity = parseInt(item.quantity) + 1;
    } else {
      cart.items.push({ product: req.params.id, quantity: 1 });
    }
    await cart.save();
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// POST /cart/:id/decrease - decrease quantity
dataController.decrease = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return next();
    const item = cart.items.find(i => i.product.equals(req.params.id));
    if (item) {
      item.quantity = parseInt(item.quantity) - 1;
      if (item.quantity <= 0) {
        cart.items = cart.items.filter(i => !i.product.equals(req.params.id));
      }
      await cart.save();
    }
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// POST /cart/:id/delete - remove item from cart
dataController.delete = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return next();
    cart.items = cart.items.filter(i => !i.product.equals(req.params.id));
    await cart.save();
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = dataController;