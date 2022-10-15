const express = require('express');
const routes = express.Router();
const conn = require('mysql2/promise').createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'turma_23',
  port: 3307
});

routes.get('/turma_23', async (req, res) => {
  const [data] = await conn.execute('SELECT * FROM alunos')

  res.json(data);
})

routes.post('/addname/:nome/:sobrenome/:idade', async (req, res) => {
  const nome = req.params.nome;
  const sobrenome = req.params.sobrenome;
  const idade = req.params.idade;
  await conn.execute(`INSERT INTO alunos VALUES (null, ${JSON.stringify(nome)}, ${JSON.stringify(sobrenome)}, ${JSON.stringify(idade)})`)
  const [data] = await conn.execute('SELECT * FROM alunos');
  res.json(data);
})

routes.post('/add-name', async(req, res) => {
  const { nome, sobrenome, idade } = req.body;

  await conn.execute(`INSERT INTO alunos VALUES (null, ${JSON.stringify(nome)}, ${JSON.stringify(sobrenome)}, ${JSON.stringify(idade)})`)
  const [data] = await conn.execute('SELECT * FROM alunos');
  res.json(data);
})

routes.delete('/delete-name', async(req, res) => {
  const { id } = req.body;
  await conn.execute(`DELETE FROM alunos WHERE id_turma = ${id}`)
  const [data] = await conn.execute('SELECT * FROM alunos');
  res.json(data);
})

module.exports = routes;
