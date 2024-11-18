const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Import the sequelize instance

const TableB = sequelize.define('TableB', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, // Define as primary key
    autoIncrement: true, // Enable auto-increment
    allowNull: false, // Ensure it can't be null
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false, // Ensure it can't be null
  },
}, {
  timestamps: true, // Includes createdAt and updatedAt
});

module.exports = TableB;
