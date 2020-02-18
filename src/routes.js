const express = require('express');
const routes = express.Router();

const itemController = require('./controller/itemController');
const categoriaController = require('./controller/categoriaController');
const pessoaController = require('./controller/pessoaController');
const mesaController = require('./controller/mesaController');
const usuarioController = require('./controller/usuarioController');

// Rotas

// Item
routes.get('/item', itemController.search);
routes.get('/item/:id', itemController.getById);
routes.post('/item', itemController.insert);
routes.delete('/item/:id', itemController.delete);
routes.put('/item/:id', itemController.update);

// Categoria
routes.get('/categoria', categoriaController.search);
routes.get('/categoria/:id', categoriaController.getById);
routes.post('/categoria', categoriaController.insert);
routes.delete('/categoria/:id', categoriaController.delete);
routes.put('/categoria/:id', categoriaController.update);

//Pessoas 
routes.get('/pessoa', pessoaController.search);
routes.get('/pessoa/:id', pessoaController.getById);
routes.post('/pessoa', pessoaController.insert);
routes.delete('/pessoa/:id', pessoaController.delete);
routes.put('/pessoa/:id', pessoaController.update);

// Mesa
routes.get('/mesa', mesaController.search);
routes.get('/mesa/:id', mesaController.getById);
routes.post('/mesa', mesaController.insert);
routes.delete('/mesa/:id', mesaController.delete);
routes.put('/mesa/:id', mesaController.update);

routes.get('/usuario', usuarioController.search);
routes.get('/usuario/:id', usuarioController.getById);
routes.post('/usuario', usuarioController.insert);
routes.delete('/usuario/:id', usuarioController.delete);
routes.put('/usuario/:id', usuarioController.update);

module.exports = routes;