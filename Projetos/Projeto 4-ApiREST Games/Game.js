const connection = require('./database/db')
const sequelize = require('sequelize')

const Games = connection.define('games',{
    title:{
        type:sequelize.STRING,
        allowNull:false
    },
    year:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    price:{
        type:sequelize.INTEGER,
        allowNull:false
    }
})
Games.sync({force:false})
module.exports=Games