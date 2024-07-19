const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
// HOME
route.get('/', homeController.index);

<<<<<<< HEAD
// Rotas de Login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
=======
// LOGIN
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);

>>>>>>> 7f30c1e5e2b4fd40c32dc8a222541924903f6c80

module.exports = route;