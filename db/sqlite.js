const { Sequelize } = require("sequelize");
const path = require("path");

// Initializing the SQLite database connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "userData.sqlite"), // Storing database in the 'db' folder
});

// Exporting the connection
module.exports = sequelize;
