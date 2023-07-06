const express = require('express');
require("dotenv").config();
const db = require('./utils/database');
const Todos = require('./models/todos.model');
Todos();

db.sync().then(()=> console.log("Base de datos ToDos sincronizada"));

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    res.send('Welcome MASTER');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
