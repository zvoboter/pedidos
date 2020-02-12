const express = require('express');
const routes = express.Router();

const itemController = require('./controller/itemController');

// Rotas
routes.get('/item', itemController.index);
routes.get('/item/:id', itemController.show);
routes.post('/item', itemController.store);
routes.delete('/item/:id', itemController.destroy);
routes.put('/item/:id', itemController.update);

module.exports = routes;