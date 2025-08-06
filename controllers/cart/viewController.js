

const viewController = {
  Indexofcart(req, res, next) {
    res.render('cart/Index', {
      user: req.user,
      cart: res.locals.data.cart || [],
      token: res.locals.data.token
    });
  }
}

module.exports = viewController;