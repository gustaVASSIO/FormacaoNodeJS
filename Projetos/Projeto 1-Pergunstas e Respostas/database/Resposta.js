const Sequelize = require('sequelize')
const connection = require("./db");

const Resposta = connection.define('respostas',{
    perguntaID:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    resposta:{
        type:Sequelize.TEXT,
        allowNull:false
    }
    
})
Resposta.sync({force:false})
module.exports = Resposta