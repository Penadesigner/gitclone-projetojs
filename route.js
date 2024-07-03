const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')

// Rotas
route.get('/', homeController.paginaHome)
route.get('/login', loginController.index);

// Exportar para server.js usar as rotas
module.exports = route;