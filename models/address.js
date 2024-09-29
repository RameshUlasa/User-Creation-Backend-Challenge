const { DataTypes } = require("sequelize");
const sequelize = require("../db/sqlite");
const User = require("./user");

// Define The Address model
const Address = sequelize.define("Address", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the relationship (User has many Addresses)
User.hasMany(Address, { foreignKey: "userId" });
Address.belongsTo(User, { foreignKey: "userId" });

module.exports = Address;
