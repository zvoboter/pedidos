const express = require('express');
const routes = express.Router();

const itemController = require('./controller/itemController');
const categoriaController = require('./controller/categoriaController');
const pessoaController = require('./controller/pessoaController');
const mesaController = require('./controller/mesaController');
const usuarioController = require('./controller/usuarioController');
const pedidoController = require('./controller/pedidoController');
const pedidoItemController = require('./controller/pedidoItemController');
const pagamentoController = require('./controller/pagamentoController');
const pagamentoItemController = require('./controller/pagamentoItemController');

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

// Usuario
routes.get('/usuario', usuarioController.search);
routes.get('/usuario/:id', usuarioController.getById);
routes.post('/usuario', usuarioController.insert);
routes.delete('/usuario/:id', usuarioController.delete);
routes.put('/usuario/:id', usuarioController.update);

// Pedido
routes.get('/pedido', pedidoController.search);
routes.get('/pedido/:id', pedidoController.getById);
routes.post('/pedido', pedidoController.insert);
routes.delete('/pedido/:id', pedidoController.delete);
routes.put('/pedido/:id', pedidoController.update);

// PedidoItem
routes.get('/pedidoItem', pedidoItemController.search);
routes.get('/pedidoItem/:id', pedidoItemController.getById);
routes.post('/pedidoItem', pedidoItemController.insert);
routes.delete('/pedidoItem/:id', pedidoItemController.delete);
routes.put('/pedidoItem/:id', pedidoItemController.update);

// Pagamento
routes.get('/pagamento', pagamentoController.search);
routes.get('/pagamento/:id', pagamentoController.getById);
routes.post('/pagamento', pagamentoController.insert);
routes.delete('/pagamento/:id', pagamentoController.delete);
routes.put('/pagamento/:id', pagamentoController.update);

// PagamentoItem
routes.get('/pagamentoItem', pagamentoItemController.search);
routes.get('/pagamentoItem/:id', pagamentoItemController.getById);
routes.post('/pagamentoItem', pagamentoItemController.insert);
routes.delete('/pagamentoItem/:id', pagamentoItemController.delete);
routes.put('/pagamentoItem/:id', pagamentoItemController.update);

module.exports = routes;