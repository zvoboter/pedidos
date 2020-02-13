const express = require('express');
const routes = express.Router();

const itemController = require('./controller/itemController');
const categoriaController = require('./controller/categoriaController');
const pessoaController = require('./controller/pessoaController');
const identificacaoController = require('./controller/identificacaoController');

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

// Identificação
routes.get('/identificacao', identificacaoController.search);
routes.get('/identificacao/:id', identificacaoController.getById);
routes.post('/identificacao', identificacaoController.insert);
routes.delete('/identificacao/:id', identificacaoController.delete);
routes.put('/identificacao/:id', identificacaoController.update);

module.exports = routes;