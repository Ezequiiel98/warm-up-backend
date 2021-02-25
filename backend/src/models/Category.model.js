const Sequelize = require('sequelize');
const { database } = require('../config');

const Category = database.dbConfig.define('category', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: Sequelize.STRING(200),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'category is required',
      },
      notNull: {
        msg: 'category is required',
      },
    },
  },
});

module.exports = Category;
