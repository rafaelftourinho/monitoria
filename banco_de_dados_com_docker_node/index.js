const sakila_routes = require('./sakila_routes')
const turma_23_routes = require('./turma_23_routes');
const express = require('express');
const app = express();

app.use(express.json());
app.use(sakila_routes);
app.use(turma_23_routes);

app.listen(3004, () => console.log('Rodando da porta 3004'))
