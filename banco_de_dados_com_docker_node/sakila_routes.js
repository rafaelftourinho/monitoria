const express = require('express');
const routes = express.Router();
const conn = require('mysql2/promise').createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sakila',
  port: 3307
});

routes.get('/actor', async (req, res) => {
  const [data] = await conn.execute('SELECT * FROM actor');

  res.json(data);
})

routes.get('/address', async (req, res) => {
  const [data] = await conn.execute('SELECT * FROM address');

  res.json(data);
})

// ADICIONANDO PESSOAS NA TABELA
routes.post('/addactor/:first_name/:last_name', async(req, res) => {
  const first_name = req.params.first_name;
  const last_name = req.params.last_name;
  await conn.execute(`INSERT INTO actor VALUES (null, ${JSON.stringify(first_name)}, ${JSON.stringify(last_name)}, curdate())`)
  const [data] = await conn.execute('SELECT * FROM actor');
  const filter = data.filter((name) => name.first_name === first_name);
  res.json(filter);
})

routes.post('/add-actor', async(req,res) => {
  const { first_name, last_name } = req.body
  // console.log(req.body);
  await conn.execute(`INSERT INTO actor VALUES (null, ${JSON.stringify(first_name)}, ${JSON.stringify(last_name)}, curdate())`)
  const [data] = await conn.execute('SELECT * FROM actor');
  const filter = data.filter((name) => name.first_name === first_name);
  res.json(filter);
})

routes.get('/film', async(req,res) => {
  const [data] = await conn.execute('SELECT * FROM film');

  res.json(data);
})

module.exports = routes
