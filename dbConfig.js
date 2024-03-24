const { Sequelize, DataTypes } = require("sequelize");

// console.log("dbhost", process.env.host)
const sequelize = new Sequelize(process.env.database, process.env.dbUsername, process.env.dbPassword, {
    dialect: 'mysql',
    port: process.env.dbPort,
    host: process.env.host,
    logging: true
})

async function checkConnection() {
    try {
        console.log("connection successful")
        await sequelize.authenticate();
    } catch (error) {
        console.log("failed connection", error)
    }
}

checkConnection();

module.exports = { sequelize, Sequelize, DataTypes };