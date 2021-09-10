'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static getPoint(id) {
      return Point.sum('point', {
        where: {
          ProfileId: id
        }
      })
    }
    
    static associate(models) {
      // define association here
      Point.belongsTo(models.Profile, {foreignKey:'ProfileId'})
    }
  };
  Point.init({
    point: DataTypes.INTEGER,
    ProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};