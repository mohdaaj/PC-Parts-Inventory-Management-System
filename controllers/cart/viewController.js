

const viewController = {
  Indexofcart(req, res, next) {
    res.render('cart/Index', {
      user: req.user,
      cart: res.locals.data.cart || [],
      token: res.locals.data.token
    });
  },

  addtoCart(req, res) {
    const token = req.query.token ? `?token=${req.query.token}` : '';
    res.redirect('/cart' + token);
},

  decrease(req, res) {
    const token = req.query.token ? `?token=${req.query.token}` : '';
    res.redirect('/cart' + token);
  },

  delete(req, res) {
    const token = req.query.token ? `?token=${req.query.token}` : '';
    res.redirect('/cart' + token);
  }
};


module.exports = viewController;