'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Autos.hasMany(models.Alquiler, { foreignKey: 'autoId' });
    }
  }
  Autos.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    año: DataTypes.STRING,
    disponibilidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Autos',
    tableName: 'autos'
  });
  return Autos;
};