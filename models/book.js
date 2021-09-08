'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    author: DataTypes.STRING,
    country: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    language: DataTypes.STRING,
    link: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    title: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};