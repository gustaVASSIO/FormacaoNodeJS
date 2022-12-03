const connection = require('./database/db')
const sequelize = require('sequelize')

const User = connection.define('users',{
    email:{
        type:sequelize.STRING,
        allowNull:false
    },
    senha:{
        type:sequelize.STRING,
        allowNull:false
    }
},{
    timestamps: false,
});
User.sync({force:false})
module.exports=User