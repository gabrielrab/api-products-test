const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inicia o App
const app = express();
app.use(express.json());
app.use(cors());

//Conecta com o BD
mongoose.connect(
    'mongodb://gabrielrab:67920000Ab@ds161134.mlab.com:61134/node-project', 
    { useNewUrlParser: true }
);
requireDir('./src/models');

//const Product = mongoose.model('Product');

//Rotas
app.use('/', require('./src/routes'));

module.exports = app;