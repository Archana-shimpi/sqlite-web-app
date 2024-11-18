const express = require('express');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const app = express(); // Initialize the app

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Database setup
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3',
});

// Define models
const TableA = sequelize.define('TableAs', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const TableB = sequelize.define('TableBs', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false },
});

// Sync database
sequelize.sync().then(() => {
  console.log('Database synchronized');
});

// Routes for inserting data
app.post('/insert-tableA', async (req, res) => {
  try {
    const { name } = req.body;
    await TableA.create({ name });
    res.send('Data inserted into Table A');
  } catch (error) {
    res.status(500).send('Error inserting data into Table A');
  }
});

app.post('/insert-tableB', async (req, res) => {
  try {
    const { description } = req.body;
    await TableB.create({ description });
    res.send('Data inserted into Table B');
  } catch (error) {
    res.status(500).send('Error inserting data into Table B');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//Add the route to serve the sw.js file. 
//this is for PWA
app.get('/sw.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, 'public', 'sw.js'));
});
