const Sequelize = require('sequelize')
const connection = new Sequelize('projetoperguntas','root','muzambinho13',{
    host:'localhost',
    dialect:'mysql',
    port:3307,
});
module.exports = connection; 