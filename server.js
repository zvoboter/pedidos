const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb+srv://zvoboter:zvoboter@cluster0-g40dh.gcp.mongodb.net/pedidos?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

// Importa todos os models
requireDir('./src/model');

// Rotas
app.use('/api', require('./src/routes'))

// Inicia a api na porta passada por parametro
app.listen(3003);