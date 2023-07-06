const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todos = db.define('ToDos', {
    //omito el Id por que se genera por defecto como pk e increment
    username: {
        type: DataTypes.STRING(15),
        unique: true,
        allowNull: false,
    },
    title: { 
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    iscompleted: {
        type: DataTypes.BOOLEAN('false'),
    }
});

module.exports = Todos;