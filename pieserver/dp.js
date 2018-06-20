const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('PieServer', 'postgres', 'TheEndIsNow', {
    host: 'localhost', 
    dialect: 'postgres'  
});    

module.exports = sequelize;