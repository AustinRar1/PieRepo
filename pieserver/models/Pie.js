module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Pie',{
        userEmail: DataTypes.STRING,
        nameOfPie: DataTypes.STRING,
        baseOfPie: DataTypes.STRING,
        crust: DataTypes.STRING,
        servings: DataTypes.INTEGER,
        rating: DataTypes.INTEGER,
        timeToBake: DataTypes.INTEGER
    });
};