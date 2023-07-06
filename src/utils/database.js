const {Sequelize} = require('sequelize');

const db = new Sequelize( {
    host: 'localhost',
    database: 'todos_db',
    port: 5432,
    username: 'postgres',
    password: '1234',
    dialect: 'postgres'
});

module.exports = db; 