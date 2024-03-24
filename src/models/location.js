const { sequelize, DataTypes } = require("../../dbConfig");

const location = sequelize.define('location', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
}, {
    tableName: "location"
})

module.exports = location;