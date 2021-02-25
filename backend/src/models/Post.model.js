const Sequelize = require('sequelize');
const { database } = require('../config');
const Category = require('./Category.model');

const { validateImageUrl } = require('../helpers');

const Post = database.dbConfig.define('post', {
  id: {
    type: Sequelize.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: Sequelize.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'title is required',
      },
      notNull: {
        msg: 'title is required',
      },
    },
  },

  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'content is required',
      },
      notNull: {
        msg: 'content is required',
      },
    },
  },

  image: {
    type: Sequelize.STRING(1000),
    allowNull: false,
    validate: {
      validator: validateImageUrl,
    },
  },

  categoryId: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    references: {
      model: Category,
      key: 'id',
    },
    validate: {
      notEmpty: {
        msg: 'category is required',
      },
      notNull: {
        msg: 'category is required',
      },
    },
  },

  createAt: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'createAt is required',
      },
      notNull: {
        msg: 'createAt is required',
      },
      isDate: {
        msg: 'createAt must be a date',
      },
    },
  },
});

Post.belongsTo(Category);

module.exports = Post;
