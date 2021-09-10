'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrowing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    expiredBorrow() {
      var result = new Date(this.createdAt);
      console.log(this.createdAt);
      result.setDate(result.getDate() + 5);
      return result;
    }

    static associate(models) {
      // define association here
      Borrowing.belongsTo(models.Book, {foreignKey:'BookId'})
      Borrowing.belongsTo(models.Profile, {foreignKey:'ProfileId'})
    }
  };
  Borrowing.init({
    ProfileId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Borrowing',
  });
  return Borrowing;
};