// Import Dependencies
const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { Sequelize } = require('sequelize');
const { menu } = require('./inquirer/inquirer');
const sequelize = require('./config/connection');

// Express -- Setup
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

menu();

// // Mysql2 -- create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'organisation_db'
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(PORT, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});