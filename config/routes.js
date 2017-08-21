
module.exports.routes = {

  '/': {
    view: 'homepage'
  },

  'GET /login': {
      controller: 'AuthController',
      action: 'login'
  },
  'POST /login': {
      controller: 'AuthController',
      action: 'process'
  },
  'GET /logout': {
      controller: 'AuthController',
      action: 'logout'
  }

};
