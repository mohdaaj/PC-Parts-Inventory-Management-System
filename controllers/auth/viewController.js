const viewController = {
  signUp(req, res, next) {
    res.render('auth/SignUp', { user: req.user });
  },
  signIn(req, res, next) {
    res.render('auth/SignIn', { user: req.user });
  },
  apiAuth(req, res, next) {
    res.json({ user: req.user, token: res.locals.data.token });
  },
  redirectToLogin(req, res, next) {
    res.redirect('/users/login');
  }
};

module.exports = viewController;
