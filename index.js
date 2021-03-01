const express = require('express');
const fs = require("fs");
const app = express();
const jsonf = fs.readFileSync('api.json');
var json = JSON.parse(jsonf)

app.get('/', (req, res) => {
  res.send('<h1>hi iam zaki</h1><br>check me api in <a href="/api">this</a><br><button><a href="https://github.com/muhammadzaki693"><img src="https://img.shields.io/badge/me-github-%3CCOLOR%3E"/></a></button>')
});

app.get('/api', (req, res) => {
  res.json(json)
})

app.get('/api/:id', (req, res) => {
  res.json(json[req.params.id])
});

app.listen(3000, () => {
  console.log('server started');
});