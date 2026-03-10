const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgresql://inkflow:inkflow@localhost:5432/inkflow_db',
  {
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
