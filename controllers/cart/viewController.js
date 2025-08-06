
const viewController = {
    Indexofcart(req, res, next) {
  res.render('cart/Index', {
    user: req.user,
    products: res.locals.data.products,
    token: res.locals.data.token 
  });
}
}

module.exports = viewController;