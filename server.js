const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hola Mundo con NMA test...'))

app.listen(3000);
console.log('Conectado en puerto 3k...')