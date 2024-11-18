const { Sequelize } = require('sequelize');

// Set up Sequelize to connect to an SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Path to your SQLite database file
  logging: false, // Set to true to log SQL queries
});

module.exports = sequelize;
