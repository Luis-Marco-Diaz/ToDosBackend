const express = require('express');
const morgan = require("morgan");
require("dotenv").config();
const ToDos = require("./routes/todos.routes");
const db = require('./utils/database');
const Todos = require('./models/todos.model');


db.sync().then(()=> console.log("Base de datos ToDos sincronizada"));

const app = express();

const requestTime = (req, res, next) => {
    const date = Date.now();
    // crear una nueva propiedad timestamp en el objeto request
    req.tiempoyfecha = date;
    next();
  };

  app.use(requestTime);
  app.use(morgan("dev"));
  app.use(express.json()); // next
  
  app.use(ToDos); // middleware a nivel de rutas

const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    res.send('Welcome MASTER');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
