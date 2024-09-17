const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('medicalife', 'root', 'ahena', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;

