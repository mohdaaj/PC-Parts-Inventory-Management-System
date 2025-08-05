
const RESOURCE_PATH = '/products';

const viewController = {
  signUp(req, res, next) {
    res.render('auth/SignUp');
  },

  signIn(req, res, next) {
    res.render('auth/SignIn');
  },

  Index(req, res, next) {
    res.render('products/Index', {
      user: req.user,
      products: res.locals.data.products,
      token: res.locals.data.token
    });
  },

  show(req, res, next) {
    res.render('products/Show', {
      product: res.locals.data.product,
    });
  },

  edit(req, res, next) {
    res.render('products/Edit', {
      product: res.locals.data.product,
    });
  },

  newView(req, res, next) {
    res.render('products/New', res.locals.data);
  },

  redirectHome(req, res, next) {
    if (res.locals.data.token) {
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`);
    } else {
      res.redirect(RESOURCE_PATH);
    }
  },

  redirectShow(req, res, next) {
    const id = req.params.id || (res.locals.data.product && res.locals.data.product._id);
    if (!id) {
      res.redirect(RESOURCE_PATH + `/${req.params.id}?token=${res.locals.data.token}`)
      return;
    }
    if (res.locals.data.token) {
      res.redirect(`${RESOURCE_PATH}/${id}?token=${res.locals.data.token}`);
    } else {
      res.redirect(`${RESOURCE_PATH}/${id}`);
    }
  },

  Indexofall(req, res, next) {
    res.render('allproducts/Index',  res.locals.data.products );
  }
};




module.exports = viewController;
