const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Primeira Rota
routes.get('/products', ProductController.index); //Geral
routes.get('/products/:id', ProductController.show); //Detalhe
routes.post('/products', ProductController.store); //Criar
routes.put('/products/:id', ProductController.update); //Update 
routes.delete('/products/:id', ProductController.destroy); //Delete 


module.exports = routes;