'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    age() {
      return Math.floor((new Date() -  new Date(this.birth_of_date).getTime()) / 3.15576e+10 )
    }

    dateBorn(date) {
      return new Date(date).toISOString().split("T")[0]
    }

    static associate(models) {
      // define association here
      Profile.hasMany(models.Borrowing, { foreignKey: 'ProfileId' })
      Profile.hasMany(models.Point, {foreignKey:"ProfileId"})
    }
  };
  Profile.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    birth_of_date: DataTypes.DATE,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};