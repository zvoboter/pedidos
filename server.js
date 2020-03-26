require('dotenv').config({ path: process.env.NODE_ENV == "test" ? ".env.test" : ".env" });

const express = require('express');
const mongoose = require('mongoose');
// const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(process.env.MONGO_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

// Importa todos os models
// requireDir('./src/model');

// Rotas
app.use('/api', require('./src/routes'))

module.exports = app;