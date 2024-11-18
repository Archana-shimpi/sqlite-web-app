const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import the sequelize instance

const TableA = sequelize.define('TableA', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define as primary key 
    autoIncrement: true, // Enable auto-increment
    allowNull: false, // Ensure it can't be null
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Ensure it can't be null
  },
}, {
  timestamps: true, // Includes createdAt and updatedAt
});

module.exports = TableA;
